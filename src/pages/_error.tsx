// Consts
import CONTENT from '@utils/data';

// Components
import Layout from '@components/UI/Layout';
import SeoHead from '@components/SEO/SeoHead';

// Style
import { useStyletron } from 'baseui';

const Error = ({ statusCode }) => {
  const {
    HEAD: { TITLE, DESCRIPTION, KEYWORDS, AUTHOR, LOGO },
  } = CONTENT;

  // Style
  const [css, theme] = useStyletron();
  const pageWrapper = css({
    width: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '-20px',
  });

  const textWrapper = css({
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  });

  const videoStyle = css({
    position: 'absolute',
    top: 0,
    left: 0,
  });

  const textStyle = css({
    color: theme.colors.contentPrimary,
    [theme.mediaQuery.small]: {
      fontSize: '150px',
    },
    [theme.mediaQuery.medium]: {
      fontSize: '300px',
    },
    [theme.mediaQuery.large]: {
      fontSize: '500px',
    },
  });

  return (
    <Layout>
      <div className={pageWrapper}>
        <SeoHead
          title={TITLE.ERROR}
          description={DESCRIPTION.ERROR}
          author={AUTHOR}
          keywords={KEYWORDS.ERROR}
          imageUrl={LOGO}
        />
        <video className={videoStyle} autoPlay loop muted playsInline>
          <source src="/video/error-background.mp4" type="video/mp4" />
        </video>
        <div className={textWrapper}>
          <span className={textStyle}>{statusCode}</span>
        </div>
      </div>
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
