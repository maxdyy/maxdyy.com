import React from "react";
import CONSTS from "../utils/consts";

// Hooks
import { useStyletron } from "baseui";

// Components
import Link from "next/link";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";
import { Button } from "baseui/button";
import SearchBar from "./Search/SearchBar";

// Style
import { wrapper, flexBetween } from "../styles/styles";

const Header = () => {
  const {
    CONTENT: {
      HEADER: {
        NAVIGATION: { LOGO, BLOG, CONTACT, WORK },
      },
    },
  } = CONSTS;

  // Style
  const [css, theme] = useStyletron();
  const wrapperStyle = css({
    ...wrapper,
    ...flexBetween,
    width: "100%",
  });
  const linkStyle = css({
    color: "inherit",
    textDecoration: "none",
  });
  const logoWrapperStyle = css({
    color: "inherit",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  });
  const logoStyle = css({
    height: "40px",
    width: "40px",
    padding: "3px",
  });

  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            position: "fixed",
            width: "100%",
            zIndex: 100,
            height: "65px",
            padding: "0px",
            backgroundColor: "rgba(17, 17, 17, 0.7803921568627451)",
            backdropFilter: "blur(10px)",
          }),
        },
      }}
    >
      <div className={wrapperStyle}>
        <StyledNavigationList>
          <StyledNavigationItem>
            <Link href={LOGO.URL}>
              <a href={LOGO.URL} className={logoWrapperStyle}>
                <img className={logoStyle} alt={LOGO.ALT} src={LOGO.SRC} />
              </a>
            </Link>
          </StyledNavigationItem>
        </StyledNavigationList>
        <SearchBar />
        <StyledNavigationList
          $align={ALIGN.right}
          $style={{ marginRight: "24px" }}
        >
          <StyledNavigationItem>
            <Link href={BLOG.URL}>
              <Button kind={"minimal"}>
                <a href={BLOG.URL} className={linkStyle}>
                  {BLOG.LABEL}
                </a>
              </Button>
            </Link>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <Link href={WORK.URL}>
              <Button kind={"minimal"}>
                <a href={WORK.URL} className={linkStyle}>
                  {WORK.LABEL}
                </a>
              </Button>
            </Link>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <Link href={CONTACT.URL}>
              <Button kind={"minimal"}>
                <a href={CONTACT.URL} className={linkStyle}>
                  {CONTACT.LABEL}
                </a>
              </Button>
            </Link>
          </StyledNavigationItem>
        </StyledNavigationList>
      </div>
    </HeaderNavigation>
  );
};

export default Header;
