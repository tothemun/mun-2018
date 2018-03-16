import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import htmlParse from 'html-react-parser';
import styles from './WPContent.css';

const WPContent = ({ className, content, type }) => (
  <div className={cn(styles.container, className, styles[type])}>
    {htmlParse(content)}
  </div>
);

WPContent.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default WPContent;
