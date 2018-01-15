import cn from 'classnames';
import React from 'react';
import { Button, ProgressiveImage, WPContent } from '_components';
import styles from './WorkCard.css';

const WorkCard = ({ loaded, page }) => (
  <div className={cn(styles.container, {[styles.loaded]: loaded})} to={`/page/${page.id}`}>
    <ProgressiveImage className={styles.image} src={page._embedded['wp:featuredmedia'][0].source_url} alt='Work Header' />
    <div className={styles.details}>
      <div className={styles.snippet}>
        <p className={styles.title}>{page.title.rendered}</p>
        <WPContent content={page.excerpt.rendered} />
      </div>
      <Button to='' type='block'>
        View
      </Button>
    </div>
  </div>
);

export default WorkCard;
