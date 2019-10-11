import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'components/atoms/divider';

import styles from './index.module.scss';

const Card = ({ title, children, footerComponent }) => (
  <div className={styles.card}>
    <div className={styles.header}>
      {title}
    </div>
    <Divider />
    {children}
    {footerComponent && (
      <div className={styles.footer}>
        {footerComponent}
      </div>
    )}
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footerComponent: PropTypes.element,
};

Card.defaultProps = {
  footerComponent: null,
};

export default Card;
