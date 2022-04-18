// Constants
import CONTENT from '@utils/data';
import { createMarkup } from '@utils/index';

// Components
import Layout from '@components/UI/Layout';
import SeoHead from '@components/SEO/SeoHead';
import BodyWrapper from '@components/UI/BodyWrapper';
import ContactForm from '@components/Contact/ContactForm';
import { H1, Paragraph1 } from 'baseui/typography';

const {
  HEAD: { TITLE, DESCRIPTION, AUTHOR },
  CONTACT,
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
        <H1>{CONTACT.TITLE}</H1>
        <Paragraph1>
          <span dangerouslySetInnerHTML={createMarkup(CONTACT.DESCRIPTION)} />
        </Paragraph1>
        <ContactForm />
      </BodyWrapper>
    </Layout>
  );
};

export default Contact;
