import React from 'react';

import logo from 'assets/images/logo.svg';
import styles from './index.module.scss';

const Header = () => {
  const altText = 'App logo';

  return (
    <header className={styles.header}>
      <img src={logo} title={altText} alt={altText} />
    </header>
  );
};

export default Header;
