import cn from 'classnames';
import React from 'react';
import { ProgressiveImage } from '_components';
import styles from './WorkCard.css';

const WorkCard = (props) => (
  <div className={cn(styles.container, {[styles.loaded]: props.loaded})}>
    <ProgressiveImage className={styles.image} src={props.imgSrc} alt={props.title} />
    <p className={styles.title}>{props.title}</p>
  </div>
);

export default WorkCard;
