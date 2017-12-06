import cn from 'classnames';
import React from 'react';
import { HoverElement, ProgressiveImage } from '_components';
import styles from './WorkCard.css';

const WorkCard = ({ loaded, page }) => (
  <HoverElement className={cn(styles.container, {[styles.loaded]: loaded})} to={`/page/${page.id}`}>
    <ProgressiveImage className={styles.image} src={page._embedded['wp:featuredmedia'][0].source_url} alt='Work Header' />
    <p className={styles.title}>{page.title.rendered}</p>
  </HoverElement>
);

export default WorkCard;
