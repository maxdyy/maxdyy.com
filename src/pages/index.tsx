// Constants
import CONTENT from '@utils/data';

// API
import getPosts from '@api/get/posts';

// Hooks
import { useStyletron } from 'baseui';

// Components
import Layout from '@components/UI/Layout';
import SeoHead from '@components/SEO/SeoHead';
import BodyWrapper from '@components/UI/BodyWrapper';
import MainBanner from '@components/Home/MainBanner';
import CardsSection from '@components/Home/CardsSection';
import { H2, Paragraph1 } from 'baseui/typography';
import Bubbles from '@components/Home/Bubbles';

const {
  HEAD: { TITLE, DESCRIPTION, AUTHOR },
} = CONTENT;

const Index = () => {
  // Style
  const [css] = useStyletron();

  const secondaryTitleStyle = css({
    textAlign: 'center',
    marginTop: '50px',
    backgroundColor: '#FF3CAC',
    backgroundImage:
      'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  });

  const secondaryParagraphStyle = css({
    textAlign: 'center',
  });

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
            <H2 className={secondaryTitleStyle}>LOREM IPSUM</H2>
            <Paragraph1 className={secondaryParagraphStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fugiat labore, accusamus unde quasi laboriosam ea consequatur
              nulla soluta. Tenetur tempora doloribus maxime repudiandae quae
              molestias vitae reiciendis optio laborum.
            </Paragraph1>
            <Bubbles />
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
