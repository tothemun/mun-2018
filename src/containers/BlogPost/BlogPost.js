import cn from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-grid-system';
import { clearActivePost, fetchPost } from '_actions/postActions';
import { Authors, Header, WPContent } from '_components';
import baseStyles from '_styles/index.css';
import styles from './BlogPost.css';

class BlogPost extends Component {
  componentWillMount() {
    const { fetchPost, params } = this.props;

    fetchPost(params.id);
  }

  componentWillUnmount() {
    this.props.clearActivePost();
  }

  render() {
    const { post, postFetched } = this.props;

    if(!postFetched || !post) {
      return null;
    }

    return (
      <div className={baseStyles.pt4}>
        <Header src={post._embedded['wp:featuredmedia'][0].source_url} />
        <Container className={styles.content}>
          <Row>
            <Col xs={12}>
              <h1 className={styles.title}>{post.title.rendered}</h1>
            </Col>
          </Row>
          <Row className={baseStyles.mb4}>
            <Col xs={4} md={2}>
              <span className={cn(styles.block, baseStyles.patternHash)} />
            </Col>
            <Col xs={8} md={10}>
              <Authors authors={post._embedded.author} textClass={baseStyles.faded} />
            </Col>
            <Col xs={12}>
              <hr className={baseStyles.mt0}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={8}>
              <WPContent content={post.content.rendered} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.postReducer.activePost,
  postFetched: state.postReducer.fetched
});

export default connect(mapStateToProps, {
  clearActivePost,
  fetchPost
})(BlogPost);
