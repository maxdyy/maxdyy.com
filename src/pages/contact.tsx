// Constants
import CONTENT from '@utils/data';

// Components
import Layout from '@components/UI/Layout';
import SeoHead from '@components/SEO/SeoHead';
import BodyWrapper from '@components/UI/BodyWrapper';
import ContactForm from '@components/Contact/ContactForm';
import { H1, Paragraph1 } from 'baseui/typography';

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
        <H1>MAXDYY Blog</H1>
        <Paragraph1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          earum nobis placeat? Recusandae, tempore quidem dolorum, fuga ex,
          iusto atque voluptatum corrupti voluptates sequi non? Dolor ea atque
          laudantium labore!
        </Paragraph1>
        <ContactForm />
      </BodyWrapper>
    </Layout>
  );
};

export default Contact;
