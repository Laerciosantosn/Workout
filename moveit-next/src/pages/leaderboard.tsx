import React from 'react';
import AsideMenuLeft from '../components/AsideMenuLeft';
import Profile from '../components/Profile';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Leaderboard.module.css';

function leaderboard() {
  return (
    <div className={styles.body}>
      <AsideMenuLeft />
      <div className={styles.container}>
        <h1>Leaderboard</h1>
        <div className={styles.title}>
          <p>posição</p>
          <p>usuário</p>
          <p>desafios</p>
          <p>experiencias</p>
        </div>
        <section>
          <div>
            <div className={styles.position}>
              1
              <img src="/icons/first.svg" alt="First icon" />
            </div>
          </div>
          <div>
            <div className={styles.userContainer}>
              <img
                src="https://github.com/laerciosantosn.png"
                alt="Laercio Santos"
              />
              <div>
                <strong>Laercio Santos</strong>
                <p>
                  <img src="icons/level.svg" alt="Icon level" />
                  Level 10
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.challenge}>127 Concluido</div>
          </div>
          <div>
            <div className={`${styles.experience} ${styles.challenge}`}>
              125894 xp
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className={styles.position}>
              2
              <img src="/icons/first.svg" alt="First icon" />
            </div>
          </div>
          <div>
            <div className={styles.userContainer}>
              <img
                src="https://github.com/laerciosantosn.png"
                alt="Laercio Santos"
              />
              <div>
                <strong>Laercio Santos</strong>
                <p>
                  <img src="icons/level.svg" alt="Icon level" />
                  Level 10
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.challenge}>127 Concluido</div>
          </div>
          <div>
            <div className={`${styles.experience} ${styles.challenge}`}>
              125894 xp
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className={styles.position}>
              3
              <img src="/icons/first.svg" alt="First icon" />
            </div>
          </div>
          <div>
            <div className={styles.userContainer}>
              <img
                src="https://github.com/laerciosantosn.png"
                alt="Laercio Santos"
              />
              <div>
                <strong>Laercio Santos</strong>
                <p>
                  <img src="icons/level.svg" alt="Icon level" />
                  Level 10
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.challenge}>127 Concluido</div>
          </div>
          <div>
            <div className={`${styles.experience} ${styles.challenge}`}>
              125894 xp
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className={styles.position}>
              4
              <img src="/icons/first.svg" alt="First icon" />
            </div>
          </div>
          <div>
            <div className={styles.userContainer}>
              <img
                src="https://github.com/laerciosantosn.png"
                alt="Laercio Santos"
              />
              <div>
                <strong>Laercio Santos</strong>
                <p>
                  <img src="icons/level.svg" alt="Icon level" />
                  Level 10
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.challenge}>127 Concluido</div>
          </div>
          <div>
            <div className={`${styles.experience} ${styles.challenge}`}>
              125894 xp
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default leaderboard;
