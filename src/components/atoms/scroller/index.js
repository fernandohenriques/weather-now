import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.module.scss';

const Scroller = ({
  className,
  vertical,
  horizontal,
  children,
}) => (
  <div
    className={classnames(styles.container, className, {
      [styles.vertical]: vertical,
      [styles.horizontal]: horizontal,
    })}>
    {children}
  </div>
);

Scroller.propTypes = {
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Scroller.defaultProps = {
  vertical: true,
  horizontal: false,
  className: null,
};

export default Scroller;
