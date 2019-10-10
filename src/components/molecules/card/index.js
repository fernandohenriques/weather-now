import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'components/atoms/divider';

import styles from './index.module.scss';

const Card = ({ title, children, footerContent }) => (
  <div className={styles.card}>
    <div className={styles.header}>
      {title}
    </div>
    <Divider />
    {children}
    {footerContent && (
      <div className={styles.footer}>
        {footerContent}
      </div>
    )}
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footerContent: PropTypes.element,
};

Card.defaultProps = {
  footerContent: null,
};

export default Card;
