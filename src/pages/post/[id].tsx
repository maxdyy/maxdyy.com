import React, {useEffect} from 'react';
import GraphImg from 'graphcms-image';
import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js';

// Types
import {PostProps} from '../../types/post';

// API
import getPost from '../../api/get/post';

// Hooks
import {useStyletron} from 'baseui';

// Components
import Layout from '../../components/Layout';

const Post = ({post}: PostProps) => {
  const {createdAt, postImage, postTitle, postText} = post;

  useEffect(() => {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => hljs.highlightBlock(block));
  }, []);

  // Style
  const [css, theme] = useStyletron();

  return (
    <Layout>
      <div>
        <GraphImg image={postImage} />
        <h1>{postTitle}</h1>
        <ReactMarkdown source={postText} />
        <div>{}</div>
      </div>
    </Layout>
  );
};

Post.getInitialProps = async context => {
  const {id} = context.query;
  const post = await getPost(id);
  return {post};
};

export default Post;
