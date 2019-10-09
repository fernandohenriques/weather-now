import React from 'react';
import Screen from 'components/templates/screen';

import styles from './index.module.scss';

const NotFound = () => (
  <Screen>
    <div className={styles.container}>
      <h1>Page not found! :(</h1>
    </div>
  </Screen>
);

export default NotFound;
