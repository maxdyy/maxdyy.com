import React, { useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js';

// Interface
import IPost from '@interface/post';

// API
import getPost from '@api/get/post';

// Hooks
import { useStyletron } from 'baseui';

// Components
import Layout from '@components/UI/Layout';
import SeoHead from '@components/SEO/SeoHead';

// Style
import { wrapper } from '@styles/styles';

// Utils
import { getImageByHandle } from '@utils/index';

const BlogPost = ({
  postImage,
  postTitle,
  postText,
  postDescription,
  postThumbnail,
  postKeywords,
}: IPost) => {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((block) => hljs.highlightBlock(block as HTMLElement));
  }, []);

  // Style
  const [css, theme] = useStyletron();

  const wrapperStyle = css({
    ...wrapper,
    padding: '0 16px 0 24px',
    boxSizing: 'border-box',
    margin: '60px auto 96px auto',
  });

  const imageStyle = css({
    border: `2px solid ${theme.colors.border}`,
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
      <div className={wrapperStyle}>
        <SeoHead
          postThumbnail={postThumbnail}
          postTitle={postTitle}
          postKeywords={postKeywords}
          postDescription={postDescription}
        />
        <div className={imageStyle}>
          <Image
            src={getImageByHandle(postImage.handle)}
            width={500}
            height={500}
          />
        </div>
        <h1 className={titleStyle}>{postTitle}</h1>
        <ReactMarkdown className={`${postStyle} maxdyy-post-markdown`}>
          {postText}
        </ReactMarkdown>
        <div>{}</div>
      </div>
    </Layout>
  );
};

BlogPost.getInitialProps = async (context) => {
  const { id } = context.query;
  const post = await getPost(id);
  return { post };
};

export default BlogPost;
