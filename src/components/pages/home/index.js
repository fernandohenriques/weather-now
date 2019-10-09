import React from 'react';
import Screen from 'components/templates/screen';

import styles from './index.module.scss';

const Home = () => (
  <Screen>
    <div className={styles.container}>
      <p>Hello World!</p>
    </div>
  </Screen>
);

export default Home;
