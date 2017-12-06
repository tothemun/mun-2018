import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ProgressiveImage } from '_components';
import styles from './Header.css';

const Header = ({ alt, className, src }) => (
  <div className={cn(styles.container, className)}>
    <ProgressiveImage src={src} alt={alt} />
  </div>
);

Header.defaultProps = {
  alt: 'Header'
};

Header.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Header;
