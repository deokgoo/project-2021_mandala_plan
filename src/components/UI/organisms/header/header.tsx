import React, { memo } from 'react';
import styles from './header.module.scss';

const Header = memo(() => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>plan your dream</div>
      <div className={styles.login}>login</div>
    </header>
  );
});

export default Header;
