import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '_actions/postActions';
import { Button, BlogPostCard } from '_components';
import { Col, Container, Row } from 'react-grid-system';

class BlogRoll extends Component {
  componentWillMount() {
    const { fetchAllPosts } = this.props;

    fetchAllPosts();
  }

  render() {
    return (
      <Container>

      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts
});

export default connect(mapStateToProps, { fetchAllPosts })(BlogRoll);
