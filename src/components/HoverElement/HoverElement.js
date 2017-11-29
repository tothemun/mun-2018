import cn from 'classnames';
import React from 'react';
import styles from './HoverElement.css';

const HoverElement = ({children, className}) => (
  <div className={cn(styles.container, className)}>
    {children}
  </div>
);

export default HoverElement;
