import React from 'react';

// Hooks
import {useStyletron} from 'baseui';

// Components
import {StyledLink} from 'baseui/link';

// Style
import {wrapper} from '../styles/styles';

const Footer = () => {
  // Style
  const [css, theme] = useStyletron();
  const footerStyle = css({
    margin: '20px 0 0 0',
    padding: '30px 0',
    backgroundColor: theme.colors.backgroundSecondary,
  });
  const innerWrapperStyle = css({
    ...wrapper,
    display: 'flex',
    justifyContent: 'space-evenly',
  });

  return (
    <footer className={footerStyle}>
      <div className={innerWrapperStyle}>
        <StyledLink>GitHub</StyledLink>
        <StyledLink>Twitter</StyledLink>
        <StyledLink>LinkedIn</StyledLink>
      </div>
    </footer>
  );
};

export default Footer;
