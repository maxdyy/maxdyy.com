import * as React from 'react';

// Components
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <Layout>
      <>
        <Header />
        <Footer />
      </>
    </Layout>
  );
};

export default Index;
