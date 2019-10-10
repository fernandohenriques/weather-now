import React from 'react';
import PropTypes from 'prop-types';
import TemperatureCard from 'components/organisms/temperatureCard';

import styles from './index.module.scss';

const ListTemperatureCard = ({ cities }) => (
  <section className={styles.container}>
    {cities.map((city) => {
      const { id, name, temperature, humidity, pressure } = city;
      return (
        <TemperatureCard
          key={id}
          title={name}
          temperature={temperature}
          humidity={humidity}
          pressure={pressure} />
      );
    })}
  </section>
);

ListTemperatureCard.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default ListTemperatureCard;
