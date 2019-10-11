import React from 'react';
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
    {`Updated at ${updatedAt}`}
  </>
);

FooterWeatherCard.propTypes = {
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  updatedAt: PropTypes.string.isRequired,
};

FooterWeatherCard.defaultProps = {
  humidity: undefined,
  pressure: undefined,
};

export default FooterWeatherCard;
