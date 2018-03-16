import cn from 'classnames';
import React from 'react';
import { Button, ProgressiveImage } from '_components';
import baseStyles from '_styles/index.css';
import styles from './WorkCard.css';

const WorkCard = ({ loaded, iteration, page }) => (
  <div className={cn(styles.container, {[styles.loaded]: loaded})}>
    <ProgressiveImage className={styles.image} src={page._embedded['wp:featuredmedia'][0].source_url} alt='Work Header' />
    <div className={cn(styles.details, {[styles.left]: iteration % 2})}>
      <div className={styles.snippet}>
        <p className={styles.title}>{page.title.rendered}</p>
        <h5 className={baseStyles.mb0}>{page.excerpt.rendered}</h5>
      </div>
      <Button to={`/page/${page.id}`} label='View' />
    </div>
  </div>
);

export default WorkCard;
