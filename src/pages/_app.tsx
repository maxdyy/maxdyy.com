import React from 'react';
import App from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import { DarkTheme, BaseProvider } from 'baseui';
import { styletron, debug } from '@styles/styletron';
import NextNProgress from 'nextjs-progressbar';
import '@styles/style.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron} debug={debug}>
        <BaseProvider theme={DarkTheme}>
          <NextNProgress options={{ showSpinner: false }} />
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
