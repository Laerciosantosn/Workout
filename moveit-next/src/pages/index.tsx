import React from 'react';
import Head from 'next/head';
import CompletedChallenges from '../components/CompletedChallenges';
import Contdown from '../components/Contdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import styles from '../styles/pages/Home.module.css';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Workout</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Contdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
};

export default Home;
