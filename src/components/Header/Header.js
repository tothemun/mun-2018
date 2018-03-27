import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ProgressiveImage } from '_components';
import styles from './Header.css';

const Header = ({ alt, className, type, src }) => (
  <div className={cn(styles[type], className)}>
    <ProgressiveImage src={src} alt={alt} />
  </div>
);

Header.defaultProps = {
  alt: 'Header',
  type: 'work'
};

Header.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['blog', 'work']),
  src: PropTypes.string.isRequired
};

export default Header;
