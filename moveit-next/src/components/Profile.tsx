import React from 'react';

import styles from '../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/laerciosantosn.png" alt="Laercio Santos" />
      <div>
        <strong>Laercio Santos</strong>
        <p>
          <img src="icons/level.svg" alt="Icon level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
