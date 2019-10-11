import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.module.scss';
import Loader from '-!svg-react-loader!assets/icons/loader.svg';

const Loading = ({ fullscreen }) => (
  <div className={classnames(styles.loading, { [styles.fullscreen]: fullscreen })}>
    <Loader />
  </div>
);

Loading.propTypes = {
  fullscreen: PropTypes.bool,
};

Loading.defaultProps = {
  fullscreen: false,
};

export default Loading;
