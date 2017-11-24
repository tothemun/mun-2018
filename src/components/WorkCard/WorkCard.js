import React from 'react';
import { ProgressiveImage } from '_components';
import baseStyles from '_styles/index.css';

const WorkCard = (props) => (
  <div className={baseStyles.mb3}>
    <ProgressiveImage src={props.imgSrc} alt={props.title} />
  </div>
);

export default WorkCard;
