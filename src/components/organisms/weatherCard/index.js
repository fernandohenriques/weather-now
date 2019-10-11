import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Card from 'components/molecules/card';
import Temperature from 'components/atoms/temperature';
import FooterWeatherCard from 'components/molecules/footerWeatherCard';

import styles from './index.module.scss';

const WeatherCard = ({ title, temperature, humidity, pressure, updatedAt }) => (
  <Card
    title={title}
    footerComponent={<FooterWeatherCard humidity={humidity} pressure={pressure} updatedAt={updatedAt} />}>
    <div className={classnames(styles.number, { [styles.big]: humidity && pressure })}>
      <Temperature number={temperature} featured />
    </div>
  </Card>
);

WeatherCard.propTypes = {
  title: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  updatedAt: PropTypes.oneOfType(
    PropTypes.shape({ _d: PropTypes.string.isRequired }).isRequired,
    PropTypes.string.isRequired,
  ).isRequired,
};

WeatherCard.defaultProps = {
  humidity: undefined,
  pressure: undefined,
};

export default WeatherCard;
