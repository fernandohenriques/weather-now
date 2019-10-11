import React from 'react';
import Screen from 'components/templates/screen';

import ListWeatherCard from 'components/organisms/listWeatherCard';

import styles from './index.module.scss';

const cities = [
  { id: 1, name: 'Nuuk, GL', temperature: -5, updatedAt: '02:48:32 PM' },
  { id: 2, name: 'Ubirici, BR', temperature: 19, humidity: 75, pressure: 892, updatedAt: '02:48:32 PM' },
  { id: 3, name: 'Nairobi, KE', temperature: 31, updatedAt: '02:48:32 PM' },
];

const Home = () => (
  <Screen>
    <div className={styles.body}>
      <ListWeatherCard cities={cities} />
    </div>
  </Screen>
);

export default Home;
