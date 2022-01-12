import React from "react";

// Hooks
import { useStyletron } from "baseui";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Types
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // Style
  const [css, theme] = useStyletron();
  const layoutStyle = css({
    backgroundColor: theme.colors.backgroundPrimary,
    overflow: "hidden",
    position: "relative",
  });

  return (
    <div className={layoutStyle}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
