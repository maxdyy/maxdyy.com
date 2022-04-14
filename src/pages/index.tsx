import React from 'react';
import Head from 'next/head';

// Constants
import CONSTS from '@utils/consts';

// API
import getPosts from '@api/get/posts';

// Components
import Layout from '@components/UI/Layout';
import BodyWrapper from '@components/UI/BodyWrapper';
import MainBanner from '@components/Home/MainBanner';
import CardsSection from '@components/Home/CardsSection';

const {
  CONTENT: {
    HEAD: { TITLE, DESCRIPTION, AUTHOR },
  },
} = CONSTS;

const Index = () => {
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
            content={`https://media.graphassets.com/0ejxFb2mQGabFqUCL4pc`}
          />
        </Head>
        <BodyWrapper>
          <>
            <MainBanner />
            <CardsSection />
          </>
        </BodyWrapper>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts };
};

export default Index;
