import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from 'components/atoms/loading';
import Screen from 'components/templates/screen';
import ListWeatherCard from 'components/organisms/listWeatherCard';

import { addCity } from 'store/ducks/cities';
import WeatherApi from 'services/openweather';

import styles from './index.module.scss';

const Home = ({ cities, setCity }) => {
  useEffect(() => {
    const getCitiesData = async (citiesIds) => {
      const { getCityById } = new WeatherApi();

      citiesIds.forEach(async (cityId) => {
        const city = await getCityById(cityId);
        setCity(city);
      });
    };

    const citiesIds = [3421319, 3445709, 184745];
    const checkCitiesLoaded = cities.filter((city) => citiesIds.includes(city.id));
    if (checkCitiesLoaded.length < 3) getCitiesData(citiesIds);
  }, [cities, setCity]);

  return (
    <Screen>
      <div className={styles.body}>
        {(cities.length > 2 && (
          <ListWeatherCard cities={cities} />
        )) || (
          <Loading fullscreen />
        )}
      </div>
    </Screen>
  );
};

Home.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      humidity: PropTypes.number,
      pressure: PropTypes.number,
      updatedAt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setCity: PropTypes.func.isRequired,
};

const mapStateToProps = ({ cities }) => ({ cities });
const mapDispatchToProps = (dispatch) => bindActionCreators({ setCity: addCity }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
