// Constants
import CONTENT from '@utils/data';

// API
import getPosts from '@api/get/posts';

// Components
import Layout from '@components/UI/Layout';
import SeoHead from '@components/SEO/SeoHead';
import BodyWrapper from '@components/UI/BodyWrapper';
import MainBanner from '@components/Home/MainBanner';
import CardsGrid from '@components/Home/CardsGrid';
import PunchLineParagraph from '@components/Home/PunchLineParagraph';
import Bubbles from '@components/Home/Bubbles';

const {
  HEAD: { TITLE, DESCRIPTION, KEYWORDS, AUTHOR, LOGO },
} = CONTENT;

const Index = () => (
  <Layout>
    <div>
      <SeoHead
        title={TITLE.HOME}
        description={DESCRIPTION.HOME}
        author={AUTHOR}
        keywords={KEYWORDS.HOME}
        imageUrl={LOGO}
      />
      <BodyWrapper>
        <>
          <MainBanner />
          <CardsGrid />
          <PunchLineParagraph />
          <Bubbles />
        </>
      </BodyWrapper>
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts };
};

export default Index;
