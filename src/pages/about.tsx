import React from "react";
import Head from "next/head";

// Consts
import CONSTS from "../utils/consts";

// Hooks
import { useStyletron } from "baseui";

// Components
import Layout from "../components/Layout";
import { Paragraph3 } from "baseui/typography";
import Bubbles from "../components/About/Bubbles";

// Style
import { wrapper } from "../styles/styles";

const About = () => {
  const {
    CONTENT: {
      HEAD: { TITLE, DESCRIPTION, AUTHOR },
      ABOUT,
    },
  } = CONSTS;

  // Style
  const [css, theme] = useStyletron();
  const wrapperStyle = css({
    ...wrapper,
    display: "flex",
  });
  const aboutTextWrapper = css({
    padding: "60px 24px",
    width: "100%",
  });
  const aboutTitle = css({
    margin: 0,
    color: theme.colors.contentPrimary,
    textDecoration: "none",
    fontWeight: 500,
    [theme.mediaQuery.small]: {
      fontSize: "20px",
    },
    [theme.mediaQuery.medium]: {
      fontSize: "28px",
    },
    [theme.mediaQuery.large]: {
      fontSize: "36px",
    },
  });
  const aboutText = css({
    margin: "40px 0",
    width: "100%",
  });

  return (
    <Layout>
      <div className={wrapperStyle}>
        <Head>
          <title>{TITLE.ABOUT}</title>
          <meta name="description" content={DESCRIPTION.ABOUT} />
          <meta name="author" content={AUTHOR} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@maxdyy" />
          <meta name="twitter:title" content={TITLE.ABOUT} />
          <meta name="twitter:description" content={DESCRIPTION.ABOUT} />
          <meta
            name="twitter:image"
            content={`https://media.graphcms.com/0ejxFb2mQGabFqUCL4pc`}
          />
        </Head>
        <div className={aboutTextWrapper}>
          <h1 className={aboutTitle}>{ABOUT.TITLE}</h1>
          <div className={aboutText}>
            <Paragraph3>
              <span dangerouslySetInnerHTML={{ __html: ABOUT.TEXT }} />
            </Paragraph3>
          </div>
          <div>
            <Bubbles />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
