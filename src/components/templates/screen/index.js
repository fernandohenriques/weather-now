import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Header from 'components/atoms/header';
import Scroller from 'components/atoms/scroller';

import styles from './index.module.scss';

const Screen = ({ children, className }) => (
  <main className={classnames(styles.screen, className)}>
    <Header />
    <Scroller>
      {children}
    </Scroller>
  </main>
);

Screen.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Screen.defaultProps = {
  className: null,
};

export default Screen;
