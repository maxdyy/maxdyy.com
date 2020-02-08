import React from 'react';
import {useStyletron} from 'baseui';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  // Style
  const [css, theme] = useStyletron();
  const layoutStyle = css({
    backgroundColor: theme.colors.backgroundPrimary,
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
