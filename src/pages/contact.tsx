// Constants
import CONTENT from '@utils/data';
import { createMarkup } from '@utils/index';

// Components
import Layout from '@components/UI/Layout';
import SeoHead from '@components/SEO/SeoHead';
import BodyWrapper from '@components/UI/BodyWrapper';
import ContactForm from '@components/Contact/ContactForm';
import { Paragraph1 } from 'baseui/typography';
import MainTitle from '@components/UI/MainTitle';

const {
  HEAD: { TITLE, DESCRIPTION, KEYWORDS, AUTHOR, LOGO },
  CONTACT,
} = CONTENT;

const Contact: React.FC = () => {
  return (
    <Layout>
      <SeoHead
        title={TITLE.CONTACT}
        description={DESCRIPTION.CONTACT}
        author={AUTHOR}
        keywords={KEYWORDS.CONTACT}
        imageUrl={LOGO}
      />
      <BodyWrapper>
        <MainTitle title={CONTACT.TITLE} />
        <Paragraph1>
          <span dangerouslySetInnerHTML={createMarkup(CONTACT.DESCRIPTION)} />
        </Paragraph1>
        <ContactForm />
      </BodyWrapper>
    </Layout>
  );
};

export default Contact;
