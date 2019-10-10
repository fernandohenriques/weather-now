import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Card from 'components/molecules/card';
import Temperature from 'components/atoms/temperature';

import styles from './index.module.scss';

const TemperatureCard = ({ title, temperature, humidity, pressure }) => {
  const footer = (
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
      Updated at 02:48:32 PM
    </>
  );

  return (
    <Card title={title} footerContent={footer}>
      <div className={classnames(styles.number, { [styles.big]: humidity && pressure })}>
        <Temperature number={temperature} featured />
      </div>
    </Card>
  );
};

TemperatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
};

export default TemperatureCard;
