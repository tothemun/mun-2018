import React, { Component } from 'react';
import { connect } from 'react-redux';
import { parse } from 'qs';
import { fetchAllPosts } from '_actions/postActions';
import { BlogPostCard, PaginationButtons } from '_components';
import { Col, Container, Row } from 'react-grid-system';
import baseStyles from '_styles/index.css';

class BlogRoll extends Component {
  componentWillMount() {
    const { fetchAllPosts, location } = this.props;
    const query = parse(location.search.substr(1));

    const page = query.page || 1;

    fetchAllPosts({ _embed: true, page: page, per_page: 5});
  }

  fetchPageOfPosts = (page) => {
    const { fetchAllPosts, totalPages } = this.props;

    if(page <= totalPages && page >= 1) {
      fetchAllPosts({ _embed: true, page: page, per_page: 1});
      this.setState({currentPage: page});
    }
  }

  render() {
    const { totalPages, posts, postsFetched, postsFetching } = this.props;
    const { currentPage } = this.state;

    if(!postsFetched || !posts) {
      return null;
    }

    return (
      <Container className={baseStyles.pt5}>
        { !postsFetching && posts.map((post, key) => (
          <BlogPostCard key={key} post={post} loaded={!postsFetching} />
        ))}
        <Row>
          <Col xs={12}>
            <PaginationButtons
              totalPages={totalPages}
              handleClick={this.fetchPageOfPosts}
              currentPage={currentPage}
            />
          </Col>
        </Row>
      </Container>
    );
  }

  state = {
    currentPage: 1
  };
}

const mapStateToProps = (state) => ({
  totalPages: state.postReducer.pages,
  posts: state.postReducer.posts,
  postsFetched: state.postReducer.fetched,
  postsFetching: state.postReducer.fetching
});

export default connect(mapStateToProps, { fetchAllPosts })(BlogRoll);
