import React from 'react';
import CONSTS from '../../utils/consts';

// Hooks
import { useStyletron } from 'baseui';

// Components
import Link from 'next/link';
import { StyledLink } from 'baseui/link';
import { Paragraph3 } from 'baseui/typography';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdPrivacyTip } from 'react-icons/md';

// Style
import { wrapper } from '../../styles/styles';

const Footer = () => {
  const {
    CONTENT: {
      FOOTER: {
        SOCIAL: { GITHUB, TWITTER, LINKEDIN },
        COPYRIGHT,
        PRIVACY,
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
    flexWrap: 'wrap',
  });

  const copyRightStyle = css({
    textAlign: 'center',
  });

  const linkWrapperStyle = css({
    minWidth: '180px',
    display: 'flex',
  });

  const linkStyle = css({
    margin: '5px 20px',
    textDecoration: 'none !important',
    display: 'flex',
    alignItems: 'center',
    transitionProperty: 'color',
    transitionDuration: theme.animation.timing300,
    ':hover': {
      color: `${theme.colors.accent200} !important`,
    },
  });

  const contactIconStyle = css({
    marginRight: '10px',
    fontSize: theme.typography.font650.fontSize,
  });

  return (
    <footer className={footerStyle}>
      <div className={innerWrapperStyle}>
        <div className={linkWrapperStyle}>
          <StyledLink
            className={linkStyle}
            href={GITHUB.URL}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={contactIconStyle} />
            {GITHUB.LABEL}
          </StyledLink>
        </div>
        <div className={linkWrapperStyle}>
          <StyledLink
            className={linkStyle}
            href={TWITTER.URL}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className={contactIconStyle} />
            {TWITTER.LABEL}
          </StyledLink>
        </div>
        <div className={linkWrapperStyle}>
          <StyledLink
            className={linkStyle}
            href={LINKEDIN.URL}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={contactIconStyle} />
            {LINKEDIN.LABEL}
          </StyledLink>
        </div>
        <div className={linkWrapperStyle}>
          <Link href={PRIVACY.URL} passHref>
            <StyledLink className={linkStyle} href={PRIVACY.URL}>
              <MdPrivacyTip className={contactIconStyle} />
              {PRIVACY.LABEL}
            </StyledLink>
          </Link>
        </div>
      </div>
      <div className={copyRightStyle}>
        <Paragraph3 marginBottom={0} marginTop="20px">
          {COPYRIGHT.START}
          {new Date().getFullYear()} {COPYRIGHT.END}
        </Paragraph3>
      </div>
    </footer>
  );
};

export default Footer;
