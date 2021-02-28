import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, restChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              onClick={restChallenge}
              type="button"
              className={styles.challengeFailButton}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSuccededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando os desafios.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;