import { useState } from 'react';

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
import { Menu, Delete } from 'baseui/icon';

const {
  CONTENT: {
    HEADER: {
      NAVIGATION: { BLOG, CONTACT, WORK },
    },
  },
} = CONSTS;

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Style
  const [css, theme] = useStyletron();

  const navigationStyle = css({
    position: 'absolute',
    top: '0',
    left: menuOpen ? '0' : '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    zIndex: 100,
    backgroundColor: theme.colors.backgroundSecondary,
    transition: theme.animation.timing200,
    [theme.mediaQuery.medium]: {
      position: 'relative',
      backgroundColor: 'transparent',
      flexDirection: 'row',
      height: '100%',
      width: 'auto',
      left: 'auto',
      top: 'auto',
    },
  });

  const linkStyle = css({
    color: 'inherit',
    textDecoration: 'none',
    width: '250px',
    [theme.mediaQuery.medium]: {
      width: 'auto',
    },
  });

  const lastNavigationItemStyle = css({
    [theme.mediaQuery.medium]: {
      marginRight: '10px',
    },
  });

  const menuButtonStyle = css({
    marginRight: '10px',
    [theme.mediaQuery.medium]: {
      display: 'none',
    },
  });

  const closeMenuButtonStyle = css({
    position: 'absolute',
    top: '10px',
    right: '10px',
    [theme.mediaQuery.medium]: {
      display: 'none',
    },
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
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
        <StyledNavigationItem className={lastNavigationItemStyle}>
          <Link href={CONTACT.URL} passHref>
            <Button kind={'minimal'}>
              <a href={CONTACT.URL} className={linkStyle}>
                {CONTACT.LABEL}
              </a>
            </Button>
          </Link>
        </StyledNavigationItem>
        <div className={closeMenuButtonStyle}>
          <Button
            kind={'minimal'}
            onClick={toggleMenu}
            $style={{
              paddingTop: '10px',
              paddingLeft: '10px',
              paddingBottom: '10px',
              paddingRight: '10px',
            }}
          >
            <Delete size={30} />
          </Button>
        </div>
      </StyledNavigationList>
      <div className={menuButtonStyle}>
        <Button
          kind={'minimal'}
          onClick={toggleMenu}
          $style={{
            paddingTop: '10px',
            paddingLeft: '10px',
            paddingBottom: '10px',
            paddingRight: '10px',
          }}
        >
          <Menu size={30} />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
