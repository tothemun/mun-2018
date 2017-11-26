import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-grid-system';
import { clearActivePost, fetchPost } from '_actions/postActions';

class BlogPost extends Component {
  componentWillMount() {
    const { fetchPost, params } = this.props;

    fetchPost(params.id);
  }

  componentWillUnmount() {
    this.props.clearActivePost();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            Hello
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.postReducer.activePost,
  postFetch: state.postReducer.fetching
});

export default connect(mapStateToProps, {
  clearActivePost,
  fetchPost
})(BlogPost);
