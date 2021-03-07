import React from 'react';
import '../styles/global.css';

const MyApp: React.FC = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
