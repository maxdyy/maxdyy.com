import React from 'react';

// Hooks
import { useStyletron } from 'baseui';

const Bubbles = () => {
  // Style
  const [css] = useStyletron();
  const bubblesWrapper = css({
    height: '380px',
    width: '100%',
    margin: '130px 0 0 -30%',
  });

  // REST OF THE CSS IS INSIDE OF STYLE/STYLE.CSS

  return (
    <div className={bubblesWrapper}>
      <div className="animation-wrapper-vscode">
        <div className="bubble m vscode" />
      </div>
      <div className="animation-wrapper-git">
        <div className="bubble s git" />
      </div>
      <div className="animation-wrapper-graphql">
        <div className="bubble m graphql" />
      </div>
      <div className="animation-wrapper-css">
        <div className="bubble m css" />
      </div>
      <div className="animation-wrapper-github">
        <div className="bubble s github" />
      </div>
      <div className="animation-wrapper-google-cloud">
        <div className="bubble m google-cloud" />
      </div>
      <div className="animation-wrapper-html">
        <div className="bubble s html" />
      </div>
      <div className="animation-wrapper-photoshop">
        <div className="bubble s photoshop" />
      </div>
      <div className="animation-wrapper-jQuery">
        <div className="bubble l jQuery" />
      </div>
      <div className="animation-wrapper-webpack">
        <div className="bubble s webpack" />
      </div>
      <div className="animation-wrapper-javascriptBBL">
        <div className="bubble m javascriptBBL" />
      </div>
      <div className="animation-wrapper-python">
        <div className="bubble m python" />
      </div>
      <div className="animation-wrapper-gulp">
        <div className="bubble s gulp" />
      </div>
      <div className="animation-wrapper-sass">
        <div className="bubble s sass" />
      </div>
      <div className="animation-wrapper-react">
        <div className="bubble l react" />
      </div>
    </div>
  );
};

export default Bubbles;
