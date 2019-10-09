import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.module.scss';

const Scroller = ({
  ref,
  className,
  vertical,
  horizontal,
  children,
}) => (
  <div
    ref={ref}
    className={classnames(styles.container, className, {
      [styles.vertical]: vertical,
      [styles.horizontal]: horizontal,
    })}>
    {children}
  </div>
);

const FancyScroller = (props, ref) => {
  const DOMRef = useRef();

  const scrollTo = (position) => {
    DOMRef.current.scrollTo({
      position,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    DOMRef.current.scrollTo(0, 0);
  };

  const scrollToBottom = () => {
    scrollTo(DOMRef.current.scrollHeight);
  };

  useImperativeHandle(ref, () => ({
    ...{ scrollTo, scrollToTop, scrollToBottom },
  }));

  return <Scroller ref={DOMRef} {...props} />;
};

Scroller.propTypes = {
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  ref: PropTypes.shape({ current: PropTypes.elementType }),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Scroller.defaultProps = {
  vertical: true,
  horizontal: false,
  className: null,
  ref: null,
};

export default forwardRef(FancyScroller);
