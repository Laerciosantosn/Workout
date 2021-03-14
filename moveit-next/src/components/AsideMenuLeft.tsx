import React from 'react';
import { FiAward, FiHome, FiPower } from 'react-icons/fi';

import styles from '../styles/components/AsideMenuLeft.module.css';

const AsideMenuLeft: React.FC = () => {
  return (
    <aside className={styles.asideLeft}>
      <img className={styles.iconLogo} src="/logo.png" alt="Power" />

      <div className={styles.menu}>
        <div className={styles.isActive}>
          <FiHome className={`${styles.iconMenu} ${styles.isActive}`} />
        </div>
        <div>
          <FiAward className={styles.iconMenu} />
        </div>
      </div>
      <FiPower className={styles.iconPower} />
    </aside>
  );
};

export default AsideMenuLeft;
