import htmlParse from 'html-react-parser';
import React from 'react';
import { Col, Row } from 'react-grid-system';
import { Link } from 'react-router';
import { Authors, Button, ProgressiveImage } from '_components';
import baseStyles from '_styles/index.css';
import styles from './BlogPostCard.css';

const BlogPostCard = ({ loaded, post }) => {
  if(!loaded) {
    return null;
  }

  return (
    <Row className={styles.container}>
      <Col xs={4}>
        <Link to={`/post/${post.id}`}>
          <ProgressiveImage
            className={styles.image}
            src={post._embedded['wp:featuredmedia'][0].source_url}
            alt='Blog Header'
          />
        </Link>
      </Col>
      <Col xs={8}>
        <div className={baseStyles.mb4}>
          <Link to={`/post/${post.id}`} className={baseStyles.undecorated}>
            <h4 className={baseStyles.mb0}>
              {post.title.rendered}
            </h4>
          </Link>
          <Authors authors={post._embedded.author} />
        </div>
        <div className={baseStyles.mb3}>
          {htmlParse(post.excerpt.rendered)}
        </div>
        <Button to={`/post/${post.id}`}>Read</Button>
      </Col>
    </Row>
  );
};

export default BlogPostCard;
