import React from 'react';
import styles from './ProgressiveImage.css';

const ProgressiveImage = (props) => (
  <img src={props.src} alt={props.alt} className={styles.image}/>
);

export default ProgressiveImage;
