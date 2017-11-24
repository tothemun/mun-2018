import cn from 'classnames';
import React from 'react';
import { ProgressiveImage } from '_components';
import baseStyles from '_styles/index.css';
import styles from './WorkCard.css';

const WorkCard = (props) => (
  <div className={cn(styles.container, {[styles.loaded]: props.loaded})}>
    <ProgressiveImage src={props.imgSrc} alt={props.title} />
  </div>
);

export default WorkCard;
