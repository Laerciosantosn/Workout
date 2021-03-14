import React, { useState } from 'react';
import Link from 'next/link';
import { FiAward, FiHome, FiPower } from 'react-icons/fi';

import styles from '../styles/components/AsideMenuLeft.module.css';

const AsideMenuLeft: React.FC = () => {
  const [isActiveHome, setIsActiveHome] = useState(true);
  const [isActiveLeaderboard, setIsActiveLeaderboard] = useState(false);

  function isHomeActive() {
    setIsActiveLeaderboard(false);
    // setIsActiveHome(true);
  }

  function isLeaderBoardActive() {
    if (isActiveHome) {
      setIsActiveHome(false);
    }
    setIsActiveLeaderboard(true);
  }

  return (
    <aside className={styles.asideLeft}>
      <img className={styles.iconLogo} src="/logo.png" alt="Power" />

      <div className={styles.menu}>
        <Link href="/">
          <div
            onClick={isHomeActive}
            className={`${isActiveHome && styles.isActive}`}
          >
            <FiHome
              className={`${styles.iconMenu} ${
                isActiveHome && styles.isActive
              }`}
            />
          </div>
        </Link>

        <Link href="/leaderboard">
          <div
            onClick={isLeaderBoardActive}
            className={`${isActiveLeaderboard && styles.isActive}`}
          >
            <FiAward
              className={`${styles.iconMenu} ${
                isActiveLeaderboard && styles.isActive
              }`}
            />
          </div>
        </Link>
      </div>
      <FiPower className={styles.iconPower} />
    </aside>
  );
};

export default AsideMenuLeft;
