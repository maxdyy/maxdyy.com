import { GetStaticProps } from 'next';

// Constants
import CONSTS from '@utils/consts';
import CONTENT from '@utils/data';

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
  HEAD: { TITLE, DESCRIPTION, AUTHOR },
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
        title={TITLE.HOME}
        description={DESCRIPTION.HOME}
        author={AUTHOR}
        keywords={DESCRIPTION.HOME}
        imageUrl="https://media.graphassets.com/0ejxFb2mQGabFqUCL4pc"
      />
      <BodyWrapper>
        <section className={sectionStyle}>
          <H1>MAXDYY Work</H1>
          <Paragraph1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            earum nobis placeat? Recusandae, tempore quidem dolorum, fuga ex,
            iusto atque voluptatum corrupti voluptates sequi non? Dolor ea atque
            laudantium labore!
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
