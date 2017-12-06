import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router';
import styles from './HoverElement.css';

const HoverElement = ({ children, className, to }) => (
  <Link className={cn(styles.container, className)} to={to}>
    {children}
  </Link>
);

export default HoverElement;
