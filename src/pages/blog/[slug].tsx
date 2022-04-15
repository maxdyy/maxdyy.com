import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js';

// Consts
import CONSTS from '@utils/consts';

// Interface
import IBlogPostPage from '@interface/blogPostPage';

// API
import getPostSlugs from '@api/get/postSlugs';
import getPost from '@api/get/post';

// Hooks
import { useStyletron } from 'baseui';

// Components
import Layout from '@components/UI/Layout';
import BodyWrapper from '@components/UI/BodyWrapper';
import SeoHead from '@components/SEO/SeoHead';

const {
  REVALIDATE_INTERVAL,
  ROUTES,
  CONTENT: {
    HEAD: { TITLE, DESCRIPTION, AUTHOR },
  },
} = CONSTS;

const BlogPost = ({ post }: IBlogPostPage) => {
  const { postTitle, postImage, postText } = post;

  useEffect(() => {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((block) => hljs.highlightBlock(block as HTMLElement));
  }, []);

  // Style
  const [css, theme] = useStyletron();

  const imageWrapperStyle = css({
    display: 'flex',
    justifyContent: 'center',
  });

  const titleStyle = css({
    color: theme.colors.contentPrimary,
    margin: '48px 0 0 0',
  });

  const postStyle = css({
    color: theme.colors.contentPrimary,
    margin: '32px 0',
    textAlign: 'justify',
  });

  return (
    <Layout>
      <SeoHead
        title={TITLE.HOME}
        description={DESCRIPTION.HOME}
        author={AUTHOR}
        keywords={DESCRIPTION.HOME}
        imageUrl="https://media.graphassets.com/0ejxFb2mQGabFqUCL4pc"
      />
      <BodyWrapper>
        <div className={imageWrapperStyle}>
          <Image
            src={postImage.url}
            width={postImage.width}
            height={postImage.height}
            alt={postTitle}
            objectFit="cover"
          />
        </div>
        <h1 className={titleStyle}>{postTitle}</h1>
        <ReactMarkdown className={`${postStyle} maxdyy-post-markdown`}>
          {postText}
        </ReactMarkdown>
      </BodyWrapper>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postSlugs = await getPostSlugs();
  const paths = postSlugs.map((post) => `${ROUTES.POST}${post.postSlug}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const postData = await getPost(slug);
  return {
    props: { post: postData },
    revalidate: REVALIDATE_INTERVAL,
  };
};

export default BlogPost;
