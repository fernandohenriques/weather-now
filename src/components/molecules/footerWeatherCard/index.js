import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const FooterWeatherCard = ({ humidity, pressure, updatedAt }) => (
  <>
    {humidity && pressure && (
      <div className={styles.data}>
        <div className={styles.humidity}>
          <div>Humidity</div>
          {`${humidity}%`}
        </div>
        <div className={styles.pressure}>
          <div>Pressure</div>
          {`${pressure}hPa`}
        </div>
      </div>
    )}
    {`Updated at ${moment(updatedAt).format('hh:mm:ss A')}`}
  </>
);

FooterWeatherCard.propTypes = {
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  updatedAt: PropTypes.oneOfType([
    PropTypes.shape({ _d: PropTypes.string.isRequired }).isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
};

FooterWeatherCard.defaultProps = {
  humidity: undefined,
  pressure: undefined,
};

export default FooterWeatherCard;
