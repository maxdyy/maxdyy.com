// Hooks
import { useStyletron } from 'baseui';

// Interface
import IProjectsList from '@interface/projectsList';
import { projectBannerDirection } from '@interface/projectBanner';

// Components
import ProjectBanner from './ProjectBanner';

const ProjectsList: React.FC<IProjectsList> = ({ projects }) => {
  // style
  const [css] = useStyletron();
  const wrapperStyle = css({
    margin: '80px 0',
  });

  const { left, right } = projectBannerDirection;

  const projectBanners = [...projects, ...projects].map((project, index) => {
    return (
      <ProjectBanner
        key={project.id}
        mobileImage={project.projectBannerMobile}
        image={project.projectBannerDesktop}
        imageAlt={project.projectBannerAlt}
        title={project.projectTitle}
        description={project.projectDescription}
        projectPageLink={project.projectUrl}
        direction={index % 2 === 0 ? left : right}
      />
    );
  });

  return <div className={wrapperStyle}>{projectBanners}</div>;
};

export default ProjectsList;
