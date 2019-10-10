import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.module.scss';

const Scroller = ({
  className,
  vertical,
  horizontal,
  children,
}, ref) => {
  const containerRef = useRef();

  const scrollTo = (position) => {
    containerRef.current.scrollTo({
      position,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    containerRef.current.scrollTo(0, 0);
  };

  const scrollToBottom = () => {
    scrollTo(containerRef.current.scrollHeight);
  };

  useImperativeHandle(ref, () => ({
    scrollTo,
    scrollToTop,
    scrollToBottom,
  }));

  return (
    <div
      ref={containerRef}
      className={classnames(styles.container, className, {
        [styles.vertical]: vertical,
        [styles.horizontal]: horizontal,
      })}>
      {children}
    </div>
  );
};

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

export default forwardRef(Scroller);
