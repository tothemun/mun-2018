import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '_actions/postActions';
import { Button, BlogPostCard } from '_components';
import { Col, Container, Row } from 'react-grid-system';
import baseStyles from '_styles/index.css';

class BlogRoll extends Component {
  componentWillMount() {
    const { fetchAllPosts } = this.props;

    fetchAllPosts();
  }

  render() {
    const { posts, postsFetched } = this.props;

    if(!posts) {
      return null;
    }

    return (
      <Container className={baseStyles.pt5}>
        { posts.map((post, key) => (
          <BlogPostCard key={key} post={post} loaded={postsFetched} />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
  postsFetched: state.postReducer.fetched
});

export default connect(mapStateToProps, { fetchAllPosts })(BlogRoll);
