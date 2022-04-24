import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import hljs from 'highlight.js';

// Consts
import CONSTS from '@utils/consts';
import CONTENT from '@utils/data';

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
import SmartImage from '@components/UI/SmartImage';

const { REVALIDATE_INTERVAL, ROUTES } = CONSTS;

const {
  HEAD: { TITLE, AUTHOR },
} = CONTENT;

const BlogPost = ({ post }: IBlogPostPage) => {
  const {
    postTitle,
    postImage,
    postText,
    postDescription,
    postKeywords,
    postThumbnail,
  } = post;

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

  const imageStyle = css({
    width: '100%',
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
        title={`${TITLE.POST} ${postTitle}`}
        description={postDescription}
        author={AUTHOR}
        keywords={postKeywords}
        imageUrl={postThumbnail?.url}
      />
      <BodyWrapper>
        <div className={imageWrapperStyle}>
          <SmartImage
            className={imageStyle}
            imageAlt={postTitle}
            mobileSrc={postImage.url}
            mobileWidth={postImage.width}
            mobileHeight={postImage.height}
            mobileHandle={postImage.handle}
            desktopSrc={postImage.url}
            desktopHeight={postImage.height}
            desktopWidth={postImage.width}
            desktopHandle={postImage.handle}
          />
        </div>
        <h1 className={titleStyle}>{postTitle}</h1>
        <ReactMarkdown
          className={`${postStyle} maxdyy-post-markdown`}
          remarkPlugins={[remarkGfm]}
        >
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
