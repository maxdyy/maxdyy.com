import { GetStaticProps } from 'next';

// Constants
import CONSTS from '@utils/consts';
import CONTENT from '@utils/data';
import { createMarkup } from '@utils/index';

// Interfaces
import IWorkPage from '@interface/workPage';

// API
import getProjects from '@api/get/projects';

// Hooks
import { useStyletron } from 'baseui';

// Components
import Layout from '@components/UI/Layout';
import SeoHead from '@components/SEO/SeoHead';
import BodyWrapper from '@components/UI/BodyWrapper';
import { H1, Paragraph1 } from 'baseui/typography';
import ProjectsList from '@components/Work/ProjectsList';

const { REVALIDATE_INTERVAL } = CONSTS;

const {
  HEAD: { TITLE, DESCRIPTION, KEYWORDS, AUTHOR, LOGO },
  WORK,
} = CONTENT;

const Work: React.FC<IWorkPage> = ({ projects }) => {
  // Style
  const [css] = useStyletron();
  const sectionStyle = css({
    minHeight: '100vh',
  });

  return (
    <Layout>
      <SeoHead
        title={TITLE.WORK}
        description={DESCRIPTION.WORK}
        author={AUTHOR}
        keywords={KEYWORDS.WORK}
        imageUrl={LOGO}
      />
      <BodyWrapper>
        <section className={sectionStyle}>
          <H1>{WORK.TITLE}</H1>
          <Paragraph1>
            <span dangerouslySetInnerHTML={createMarkup(WORK.DESCRIPTION)} />
          </Paragraph1>
          <ProjectsList projects={projects} />
        </section>
      </BodyWrapper>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projectsData = await getProjects();

  return { props: { projects: projectsData }, revalidate: REVALIDATE_INTERVAL };
};

export default Work;
