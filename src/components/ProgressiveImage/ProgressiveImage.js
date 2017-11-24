import cn from 'classnames';
import React from 'react';
import styles from './ProgressiveImage.css';

const ProgressiveImage = (props) => {
  const imageStyle = {objectFit: props.fit};

  return (
    <div className={cn(styles.container, props.className)} style={props.style}>
      <img src={props.src} alt={props.alt} className={styles.image} style={imageStyle}/>
    </div>
  );
};

ProgressiveImage.defaultProps = {
  fit: 'cover'
};

export default ProgressiveImage;
