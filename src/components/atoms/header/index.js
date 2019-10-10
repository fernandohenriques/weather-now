import React from 'react';

import logo from 'assets/images/logo.svg';
import styles from './index.module.scss';

const Header = () => {
  const altText = 'App logo';

  return (
    <header className={styles.header}>
      <figure>
        <img src={logo} title={altText} alt={altText} />
      </figure>
    </header>
  );
};

export default Header;
