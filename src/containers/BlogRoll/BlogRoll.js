import React, { Component } from 'react';
import { connect } from 'react-redux';
import { parse } from 'qs';
import { fetchAllPosts } from '_actions/postActions';
import { Button, BlogPostCard, PaginationButtons } from '_components';
import { Col, Container, Row } from 'react-grid-system';
import baseStyles from '_styles/index.css';

class BlogRoll extends Component {
  componentWillMount() {
    const { fetchAllPosts, location, totalPages, params } = this.props;
    const query = parse(location.search.substr(1));

    const page = query.page || 1;

    fetchAllPosts({ _embed: true, page: page, per_page: 1});
  }

  fetchPageOfPosts = (page) => {
    const { fetchAllPosts, location, totalPages, params } = this.props;
    const { currentPage } = this.state;

    fetchAllPosts({ _embed: true, page: page, per_page: 1});
    this.setState({currentPage: page});
  }

  handleNext = () => {
    const { totalPages } = this.props;
    const { currentPage } = this.state;

    if(currentPage <= totalPages) {
      this.fetchPageOfPosts(currentPage + 1);
    }
  }

  handlePrevious = () => {
    const { totalPages } = this.props;
    const { currentPage } = this.state;

    if(currentPage >  1) {
      this.fetchPageOfPosts(currentPage - 1);
    }
  }

  render() {
    const { totalPages, posts, postsFetching } = this.props;
    const { currentPage } = this.state;

    return (
      <Container className={baseStyles.pt5}>
        { !postsFetching && posts && posts.map((post, key) => (
          <BlogPostCard key={key} post={post} loaded={!postsFetching} />
        ))}
        <PaginationButtons
          totalPages={totalPages}
          handleNext={this.handleNext}
          handlePrevious={this.handlePrevious}
          handleClick={this.fetchPageOfPosts}
          currentPage={currentPage}
        />
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
  postsFetching: state.postReducer.fetching
});

export default connect(mapStateToProps, { fetchAllPosts })(BlogRoll);
