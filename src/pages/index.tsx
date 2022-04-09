import React from 'react';
import Head from 'next/head';

// Constants
import CONSTS from '@utils/consts';

// Hooks
import { useStyletron } from 'baseui';

// API
import getPosts from '@api/get/posts';

// Components
import Layout from '@components/Wrapper/Layout';
import MainBanner from '@components/Home/MainBanner';

const {
  CONTENT: {
    HEAD: { TITLE, DESCRIPTION, AUTHOR },
  },
} = CONSTS;

const Index = () => {
  const [css] = useStyletron();

  const wrapperStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  });

  return (
    <Layout>
      <div>
        <Head>
          <title>{TITLE.HOME}</title>
          <meta name="description" content={DESCRIPTION.HOME} />
          <meta name="author" content={AUTHOR} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@maxdyy" />
          <meta name="twitter:title" content={TITLE.HOME} />
          <meta name="twitter:description" content={DESCRIPTION.HOME} />
          <meta name="twitter:image" content={`/apple-icon-120x120.png`} />
          <meta
            name="twitter:image"
            content={`https://media.graphcms.com/0ejxFb2mQGabFqUCL4pc`}
          />
        </Head>
        <div className={wrapperStyle}>
          <MainBanner />
        </div>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts };
};

export default Index;
