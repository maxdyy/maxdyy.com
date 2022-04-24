import React from 'react';

// Hooks
import { useStyletron } from 'baseui';

// Components
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

// Types
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  // Style
  const [css, theme] = useStyletron();
  const layoutStyle = css({
    backgroundColor: theme.colors.backgroundPrimary,
    overflow: 'hidden',
    position: 'relative',
    color: theme.colors.primary50,
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
