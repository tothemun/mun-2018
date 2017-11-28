import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = (props) => (
  <div className={styles.container}>
    <ProgressiveImage src={props.src} alt={props.alt} />
  </div>
);

Header.defaultProps = {
  alt: 'Header'
};


export default Header;
