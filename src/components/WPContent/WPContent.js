import React from 'react';
import htmlParse from 'html-react-parser';

const WPContent = ({ className, content }) => (
  <div className={className}>
    {htmlParse(content)}
  </div>
);

export default WPContent;
