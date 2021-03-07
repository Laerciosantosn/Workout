import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/laerciosantosn.png" alt="Laercio Santos" />
      <div>
        <strong>Laercio Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Icon level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
