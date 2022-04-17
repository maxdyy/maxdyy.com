// Constants
import CONTENT from '@utils/data';

// Components
import Layout from '@components/UI/Layout';
import SeoHead from '@components/SEO/SeoHead';
import BodyWrapper from '@components/UI/BodyWrapper';

const {
  HEAD: { TITLE, DESCRIPTION, AUTHOR },
} = CONTENT;

const Contact: React.FC = () => {
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
        <div></div>
      </BodyWrapper>
    </Layout>
  );
};

export default Contact;
