import React from 'react';
import Screen from 'components/templates/screen';

import ListTemperatureCard from 'components/organisms/listTemperatureCard';

import styles from './index.module.scss';

const cities = [
  { id: 1, name: 'Nuuk, GL', temperature: -5 },
  { id: 2, name: 'Ubirici, BR', temperature: 19, humidity: 75, pressure: 892 },
  { id: 3, name: 'Nairobi, KE', temperature: 31 },
];

const Home = () => (
  <Screen>
    <div className={styles.body}>
      <ListTemperatureCard cities={cities} />
    </div>
  </Screen>
);

export default Home;
