import React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import {Button} from 'baseui/button';

const Header = () => {
  return (
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <Button kind={'minimal'}>Blog</Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button kind={'minimal'}>About</Button>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <Button kind={'minimal'}>Contact</Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};

export default Header;
