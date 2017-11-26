import htmlParse from 'html-react-parser';
import React from 'react';
import { Col, Row } from 'react-grid-system';
import { Button, ProgressiveImage } from '_components';
import baseStyles from '_styles/index.css';
import styles from './BlogPostCard.css';

const BlogPostCard = ({ post }) => (
  <Row className={styles.container}>
    <Col xs={4}>
      <ProgressiveImage
        className={styles.image}
        src={post._embedded['wp:featuredmedia'][0].source_url}
        alt='Blog Header'
      />
    </Col>
    <Col xs={8}>
      <div className={baseStyles.mb4}>
        <h4 className={baseStyles.mb0}>
          {post.title.rendered}
        </h4>
        <h5 className={baseStyles.mb0}>By: 'JOnathan BLair'</h5>
      </div>
      <div className={baseStyles.mb3}>
        {htmlParse(post.excerpt.rendered)}
      </div>
      <Button to={`/post/${post.id}`}>Read</Button>
    </Col>
  </Row>
);

export default BlogPostCard;
