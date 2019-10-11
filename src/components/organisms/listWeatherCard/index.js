import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from 'components/organisms/weatherCard';

import styles from './index.module.scss';

const ListWeatherCard = ({ cities }) => (
  <section className={styles.container}>
    {cities.map((city) => {
      const { id, name, country, temperature, humidity, pressure, updatedAt } = city;
      return (
        <WeatherCard
          key={id}
          title={`${name}, ${country}`}
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
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      humidity: PropTypes.number,
      pressure: PropTypes.number,
      updatedAt: PropTypes.oneOfType([
        PropTypes.shape({ _d: PropTypes.string.isRequired }).isRequired,
        PropTypes.string.isRequired,
      ]).isRequired,
    }).isRequired,
  ).isRequired,
};

export default ListWeatherCard;
