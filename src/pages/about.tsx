import React from 'react';

// API
import getPosts from '../api/get/posts';

// Hooks
import {useStyletron} from 'baseui';

// Components
import Layout from '../components/Layout';

// Style
import {wrapper} from '../styles/styles';

const About = ({posts}) => {
  // Style
  const [css, theme] = useStyletron();
  const wrapperStyle = css({
    ...wrapper,
    display: 'flex',
  });
  const aboutTextWrapper = css({
    width: '40%',
  });

  return (
    <Layout>
      <div className={wrapperStyle}>
        <div className={aboutTextWrapper}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </Layout>
  );
};

About.getInitialProps = async () => {
  const posts = await getPosts();
  return {posts};
};

export default About;
