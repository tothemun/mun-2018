import cn from 'classnames';
import React from 'react';
import baseStyles from '_styles/index.css';

const Authors = (props) => (
  <div className={cn(baseStyles.inline, props.className)}>
    <h5 className={cn(baseStyles, props.textClass)}>
      By:&nbsp;
    </h5>
    { props.authors.map((author, key) => (
      <h5 className={cn(baseStyles.mb0, props.textClass)} key={key}>
        {author.name}
      </h5>
    ))}
  </div>
);

export default Authors;
