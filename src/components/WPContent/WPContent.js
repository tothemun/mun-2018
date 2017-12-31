import cn from 'classnames';
import React from 'react';
import htmlParse from 'html-react-parser';
import styles from './WPContent.css';

const WPContent = ({ className, content }) => (
  <div className={cn(styles.container, className)}>
    {htmlParse(content)}
  </div>
);

export default WPContent;
