import React from 'react';
import { Row, Col } from 'react-grid-system';
import { Button, ProgressiveImage } from '_components';
import baseStyles from '_styles/index.css';

const BlogPostCard = ({ image, title, blurb, author }) => (
  <div className={baseStyles.mb4}>
    <Col xs={4}>
      <ProgressiveImage src={image} alt='Blog Header'/>
    </Col>
    <Col xs={8}>
      <div className={baseStyles.mb4}>
        <h4 className={baseStyles.mb0}>{title}</h4>
        <h5 className={baseStyles.mb0}>By: {author}</h5>
      </div>
      <p className={baseStyles.mb3}>{blurb}</p>
      <Button>Read</Button>
    </Col>
  </div>
);

export default BlogPostCard;
