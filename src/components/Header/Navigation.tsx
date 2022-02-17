import CONSTS from '@utils/consts';

// Hooks
import { useStyletron } from 'baseui';

// Components
import Link from 'next/link';
import {
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import { Button } from 'baseui/button';

const {
  CONTENT: {
    HEADER: {
      NAVIGATION: { BLOG, CONTACT, WORK },
    },
  },
} = CONSTS;

const Navigation = () => {
  // Style
  const [css, theme] = useStyletron();

  const navigationStyle = css({
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    zIndex: 100,
    backgroundColor: theme.colors.backgroundSecondary,
  });

  const linkStyle = css({
    color: 'inherit',
    textDecoration: 'none',
  });

  return (
    <StyledNavigationList className={navigationStyle}>
      <StyledNavigationItem>
        <Link href={BLOG.URL} passHref>
          <Button kind={'minimal'}>
            <a href={BLOG.URL} className={linkStyle}>
              {BLOG.LABEL}
            </a>
          </Button>
        </Link>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <Link href={WORK.URL} passHref>
          <Button kind={'minimal'}>
            <a href={WORK.URL} className={linkStyle}>
              {WORK.LABEL}
            </a>
          </Button>
        </Link>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <Link href={CONTACT.URL} passHref>
          <Button kind={'minimal'}>
            <a href={CONTACT.URL} className={linkStyle}>
              {CONTACT.LABEL}
            </a>
          </Button>
        </Link>
      </StyledNavigationItem>
    </StyledNavigationList>
  );
};

export default Navigation;
