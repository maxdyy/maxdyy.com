// Constants
import CONSTS from '@utils/consts';

// API
import getPosts from '@api/get/posts';

// Components
import Layout from '@components/UI/Layout';
import SeoHead from '@components/SEO/SeoHead';
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
        <SeoHead
          title={TITLE.HOME}
          description={DESCRIPTION.HOME}
          author={AUTHOR}
          keywords={DESCRIPTION.HOME}
          imageUrl="https://media.graphassets.com/0ejxFb2mQGabFqUCL4pc"
        />
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
