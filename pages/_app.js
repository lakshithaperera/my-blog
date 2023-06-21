import React from 'react';
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.scss';
import { Layout } from '../components';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
