import React from 'react';
import {useStyletron} from 'baseui';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  // Style
  const [css, theme] = useStyletron();
  const layoutStyle = css({
    backgroundColor: theme.colors.backgroundPrimary,
  });

  return <div className={layoutStyle}>{children}</div>;
};

export default Layout;
