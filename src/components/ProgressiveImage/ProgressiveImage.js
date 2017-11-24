import React from 'react';
import styles from './ProgressiveImage.css';

const ProgressiveImage = (props) => (
  <div className={props.className}>
    <img src={props.src} alt={props.alt} className={styles.image}/>
  </div>
);

export default ProgressiveImage;
