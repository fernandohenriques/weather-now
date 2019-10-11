import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from 'components/molecules/card';
import Loading from 'components/atoms/loading';
import Temperature from 'components/atoms/temperature';
import FooterWeatherCard from 'components/molecules/footerWeatherCard';

import { setCityWeather } from 'store/ducks/cities';
import kelvinToCelsius from 'utils/kelvinToCelsius';
import WeatherApi from 'services/openweather';

import styles from './index.module.scss';

const WeatherCard = ({ updateId, title, temperature, humidity, pressure, updatedAt, updateCityWeather }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const tenMinutesInterval = setInterval(async () => {
      const { getCityById } = new WeatherApi();

      setLoading(true);
      const city = await getCityById(updateId);
      updateCityWeather(city);
      setLoading(false);
    }, 600000);

    return () => clearInterval(tenMinutesInterval);
  }, [updateId, loading, updateCityWeather]);

  if (loading) {
    return (
      <Card
        title={title}
        footerComponent={<FooterWeatherCard updatedAt={updatedAt} />}>
        <div className={styles.loading}>
          <Loading />
        </div>
      </Card>
    );
  }

  return (
    <Card
      title={title}
      footerComponent={<FooterWeatherCard humidity={humidity} pressure={pressure} updatedAt={updatedAt} />}>
      <div className={classnames(styles.number, { [styles.big]: humidity && pressure })}>
        <Temperature number={kelvinToCelsius(temperature)} featured />
      </div>
    </Card>
  );
};

WeatherCard.propTypes = {
  updateId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  updatedAt: PropTypes.oneOfType([
    PropTypes.shape({ _d: PropTypes.string.isRequired }).isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  updateCityWeather: PropTypes.func.isRequired,
};

WeatherCard.defaultProps = {
  humidity: undefined,
  pressure: undefined,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ updateCityWeather: setCityWeather }, dispatch);

export default connect(null, mapDispatchToProps)(WeatherCard);
