import React from 'react';
import CONSTS from '../utils/consts';

// Hooks
import {useStyletron} from 'baseui';

// Components
import Link from 'next/link';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import {Button} from 'baseui/button';

// Style
import {wrapper, flexBetween} from '../styles/styles';

const Header = () => {
  const {
    CONTENT: {
      HEADER: {
        NAVIGATION: {LOGO, ABOUT, CONTACT},
      },
    },
  } = CONSTS;

  // Style
  const [css, theme] = useStyletron();
  const wrapperStyle = css({
    ...wrapper,
    ...flexBetween,
    width: '100%',
  });
  const linkStyle = css({
    color: 'inherit',
    textDecoration: 'none',
  });
  const logoWrapperStyle = css({
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  });
  const logoStyle = css({
    width: '40px',
    padding: '3px',
    border: `1px solid ${theme.colors.contentPrimary}`,
  });

  return (
    <HeaderNavigation>
      <div className={wrapperStyle}>
        <StyledNavigationList>
          <StyledNavigationItem>
            <Link href={LOGO.URL}>
              <a className={logoWrapperStyle}>
                <img className={logoStyle} alt={LOGO.ALT} src={LOGO.SRC} />
              </a>
            </Link>
          </StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>
            <Button kind={'minimal'}>
              <Link href={ABOUT.URL}>
                <a className={linkStyle}>{ABOUT.LABEL}</a>
              </Link>
            </Button>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <Button kind={'minimal'}>
              <Link href={CONTACT.URL}>
                <a className={linkStyle}>{CONTACT.LABEL}</a>
              </Link>
            </Button>
          </StyledNavigationItem>
        </StyledNavigationList>
      </div>
    </HeaderNavigation>
  );
};

export default Header;
