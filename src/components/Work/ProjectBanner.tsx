import CONTENT from '@utils/data';
import { createMarkup } from '@utils/index';

// Interface
import IProjectBanner from '@interface/projectBanner';
import { projectBannerDirection } from '@interface/projectBanner';

// Hooks
import { useStyletron } from 'baseui';

// Components
import { H1, Paragraph1 } from 'baseui/typography';
import { Button } from 'baseui/button';
import TiltWrapper from '@components/UI/TiltWrapper';
import SmartImage from '@components/UI/SmartImage';

const {
  WORK: { PROJECT_CTA_LABEL, PROJECT_COMING_SOON },
} = CONTENT;

const ProjectBanner: React.FC<IProjectBanner> = ({
  mobileImage,
  image,
  imageAlt,
  title,
  description,
  projectPageLink,
  direction,
}) => {
  const { left, right } = projectBannerDirection;

  // Style
  const [css, theme] = useStyletron();

  const wrapperStyle = css({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '40px 0',
    [theme.mediaQuery.medium]: {
      flexDirection: direction === left ? 'row' : 'row-reverse',
    },
  });

  const imageWrapperStyle = css({
    marginBottom: '25px',
    backgroundColor: theme.colors.primary200,
    [theme.mediaQuery.medium]: {
      width: '60%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: direction === left ? '25px' : '0px',
      marginLeft: direction === right ? '25px' : '0px',
      marginBottom: '0px',
    },
  });

  const projectTitleStyle = css({ margin: '15px 0' });

  const imageStyle = css({
    width: '100%',
  });

  const contentWrapperStyle = css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '25px',
    backgroundColor: '#272727',
    [theme.mediaQuery.medium]: {
      width: 'calc(40% - 25px)',
    },
  });

  const ctaWrapperStyle = css({
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
  });

  const linkStyle = css({
    color: 'inherit',
    textDecoration: 'none',
    fontSize: '22px',
  });

  const projectImage = () => {
    return (
      <SmartImage
        className={imageStyle}
        imageAlt={imageAlt}
        mobileSrc={mobileImage.url}
        mobileWidth={mobileImage.width}
        mobileHeight={mobileImage.height}
        mobileHandle={mobileImage.handle}
        desktopSrc={image.url}
        desktopHeight={image.height}
        desktopWidth={image.width}
        desktopHandle={image.handle}
      />
    );
  };

  const projectImageBanner = () => {
    if (projectPageLink) {
      return (
        <a
          href={projectPageLink}
          className={linkStyle}
          target="_blank"
          rel="noreferrer"
        >
          {projectImage()}
        </a>
      );
    } else {
      return projectImage();
    }
  };

  const projectCTA = () => {
    if (projectPageLink) {
      return (
        <Button kind={'minimal'}>
          <a
            href={projectPageLink}
            className={`${linkStyle} gradient-link-animated`}
            target="_blank"
            rel="noreferrer"
          >
            {PROJECT_CTA_LABEL}
          </a>
        </Button>
      );
    } else {
      return (
        <Button kind={'minimal'} type="button" disabled>
          <span className={`${linkStyle} gradient-link-animated`}>
            {PROJECT_COMING_SOON}
          </span>
        </Button>
      );
    }
  };

  return (
    <div className={wrapperStyle}>
      <TiltWrapper className={imageWrapperStyle} scale={1.02} degrees={10}>
        {projectImageBanner()}
      </TiltWrapper>
      <div className={contentWrapperStyle}>
        <H1 className={projectTitleStyle}>{title}</H1>
        <Paragraph1>
          <span dangerouslySetInnerHTML={createMarkup(description)} />
        </Paragraph1>
        <div className={ctaWrapperStyle}>{projectCTA()}</div>
      </div>
    </div>
  );
};

export default ProjectBanner;
