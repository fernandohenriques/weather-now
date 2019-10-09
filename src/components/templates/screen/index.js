import React from 'react';
import PropTypes from 'prop-types';

/* import Header from 'components/atoms/header';
import Scroller from 'components/atoms/scroller'; */

import styles from './index.module.scss';

const Screen = ({ children }) => (
  <main className={styles.screen}>
    {children}
  </main>
);

Screen.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Screen;
