import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import CompletedChallenges from '../components/CompletedChallenges';
import Contdown from '../components/Contdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import AsideMenuLeft from '../components/AsideMenuLeft';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home = (props: HomeProps) => {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.body}>
        <AsideMenuLeft />
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
      </div>
    </ChallengesProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
