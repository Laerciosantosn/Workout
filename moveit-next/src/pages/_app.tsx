import React, { useState } from 'react';
import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';

const MyApp: React.FC = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
};

export default MyApp;
