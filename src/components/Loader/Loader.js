import React from 'react';
import styles from './Loader.css';

const Loader = (props) => (
  <div className={styles.container}>
    <div className={styles.rings}/>
  </div>
);

export default Loader;
