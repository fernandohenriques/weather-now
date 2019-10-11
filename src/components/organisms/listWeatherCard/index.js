import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from 'components/organisms/weatherCard';

import styles from './index.module.scss';

const ListWeatherCard = ({ cities }) => (
  <section className={styles.container}>
    {cities.map((city) => {
      const { id, name, temperature, humidity, pressure, updatedAt } = city;
      return (
        <WeatherCard
          key={id}
          title={name}
          temperature={temperature}
          humidity={humidity}
          pressure={pressure}
          updatedAt={updatedAt} />
      );
    })}
  </section>
);

ListWeatherCard.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      updatedAt: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ListWeatherCard;
