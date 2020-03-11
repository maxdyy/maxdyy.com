import React from 'react';
import CONSTS from '../utils/consts';

// Hooks
import {useStyletron} from 'baseui';

// Components
import {StyledLink} from 'baseui/link';
import {Paragraph3} from 'baseui/typography';

// Style
import {wrapper} from '../styles/styles';

const Footer = () => {
  const {
    CONTENT: {
      FOOTER: {
        SOCIAL: {GITHUB, TWITTER, LINKEDIN},
        COPYRIGHT,
      },
    },
  } = CONSTS;

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
        <StyledLink href={GITHUB.URL} target="_blank" rel="noreferrer">
          {GITHUB.LABEL}
        </StyledLink>
        <StyledLink href={TWITTER.URL} target="_blank" rel="noreferrer">
          {TWITTER.LABEL}
        </StyledLink>
        <StyledLink href={LINKEDIN.URL} target="_blank" rel="noreferrer">
          {LINKEDIN.LABEL}
        </StyledLink>
      </div>
      <div className={copyRightStyle}>
        <Paragraph3 marginBottom={0} marginTop="30px">
          {COPYRIGHT.START}
          {new Date().getFullYear()} {COPYRIGHT.END}
        </Paragraph3>
      </div>
    </footer>
  );
};

export default Footer;
