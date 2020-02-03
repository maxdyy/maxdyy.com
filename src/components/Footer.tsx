import React from 'react';

// Hooks
import {useStyletron} from 'baseui';

// Components
import {StyledLink} from 'baseui/link';
import {Paragraph3} from 'baseui/typography';

// Style
import {wrapper} from '../styles/styles';

const Footer = () => {
  // Style
  const [css, theme] = useStyletron();
  const footerStyle = css({
    margin: '20px 0 0 0',
    padding: '30px 0 20px 0',
    backgroundColor: theme.colors.backgroundSecondary,
  });
  const innerWrapperStyle = css({
    ...wrapper,
    display: 'flex',
    justifyContent: 'space-evenly',
  });

  const copyRightStyle = css({
    textAlign: 'center',
  });

  return (
    <footer className={footerStyle}>
      <div className={innerWrapperStyle}>
        <StyledLink href="https://github.com/maxdyy">GitHub</StyledLink>
        <StyledLink href="https://twitter.com/maxdyy">Twitter</StyledLink>
        <StyledLink href="https://www.linkedin.com/in/maxdyy">
          LinkedIn
        </StyledLink>
      </div>
      <div className={copyRightStyle}>
        <Paragraph3 marginBottom={0} marginTop="30px">
          © 2017-{new Date().getFullYear()} Maksym Dmukhovskyy
        </Paragraph3>
      </div>
    </footer>
  );
};

export default Footer;
