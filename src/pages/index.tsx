import React from 'react';

// API
import getPosts from '../api/get/posts';

// Components
import Layout from '../components/Layout';
import Posts from '../components/Home/Posts';

const Index = ({posts}) => {
  return (
    <Layout>
      <Posts posts={posts} />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const posts = await getPosts();
  return {posts};
};

export default Index;
