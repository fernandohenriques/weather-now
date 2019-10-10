import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const Temperature = ({ featured, number }) => {
  const Tag = featured ? 'h2' : 'h4';
  const color = (number <= 5 && 'blue') || (number > 5 && number <= 25 && 'orange') || 'red';

  return (
    <div className={styles.container}>
      <Tag className={styles[color]}>
        {number}
        <div className={styles.degree}>&#176;</div>
      </Tag>
    </div>
  );
};

Temperature.propTypes = {
  featured: PropTypes.bool,
  number: PropTypes.number.isRequired,
};

Temperature.defaultProps = {
  featured: true,
};

export default Temperature;
