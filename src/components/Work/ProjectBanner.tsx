// Interface
import IProjectBanner from '@interface/projectBanner';
import { projectBannerDirection } from '@interface/projectBanner';

// Hooks
import { useStyletron } from 'baseui';

// Components
import Link from 'next/link';
import { H1, Paragraph1 } from 'baseui/typography';
import { Button } from 'baseui/button';
import TiltWrapper from '@components/UI/TiltWrapper';

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

  return (
    <div className={wrapperStyle}>
      <TiltWrapper className={imageWrapperStyle} scale={1.02} degrees={10}>
        <Link href={projectPageLink} passHref>
          <a href={projectPageLink} className={linkStyle}>
            <picture>
              <source media="(min-width:600px)" srcSet={image.url} />
              <img
                className={imageStyle}
                src={mobileImage.url}
                alt={imageAlt}
              />
            </picture>
          </a>
        </Link>
      </TiltWrapper>
      <div className={contentWrapperStyle}>
        <H1>{title}</H1>
        <Paragraph1>{description}</Paragraph1>
        <div className={ctaWrapperStyle}>
          <Link href={projectPageLink} passHref>
            <Button kind={'minimal'}>
              <a
                href={projectPageLink}
                className={`${linkStyle} gradient-link-animated`}
              >
                VIEW PROJECT
              </a>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
