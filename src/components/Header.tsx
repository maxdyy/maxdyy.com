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
import SearchBar from './SearchBar';

// Style
import {wrapper, flexBetween} from '../styles/styles';

const Header = () => {
  const {
    CONTENT: {
      HEADER: {
        NAVIGATION: {LOGO, ABOUT},
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
    width: theme.sizing.scale1000,
    padding: '3px',
    border: `2px solid ${theme.colors.border}`,
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
        <SearchBar />
        <StyledNavigationList
          $align={ALIGN.right}
          $style={{marginRight: '24px'}}
        >
          <StyledNavigationItem>
            <Link href={ABOUT.URL}>
              <Button kind={'minimal'}>
                <a className={linkStyle}>{ABOUT.LABEL}</a>
              </Button>
            </Link>
          </StyledNavigationItem>
        </StyledNavigationList>
      </div>
    </HeaderNavigation>
  );
};

export default Header;
