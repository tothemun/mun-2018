import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-grid-system';
import { fetchAllPages } from '_actions/pageActions';
import { fetchAllPosts } from '_actions/postActions';
import {
  BlogPostCard,
  HomepageHeader,
  HomepageSection,
  ProgressiveImage,
  WorkCard
} from '_components';
import baseStyles from '_styles/index.css';
import variables from '_styles/variables';
import styles from './Homepage.css';
import Keurig from './keurig_logo.svg';
import SeventhGen from './seventh_gen_logo.svg';
import Mamava from './mamava_logo.svg';
import HotelVT from './hotel_vt_logo.svg';
import Champlain from './champlain_logo.svg';
import Wildfire from './wildfire_logo.svg';

class Homepage extends Component {
  componentWillMount() {
    const { fetchAllPages, fetchAllPosts } = this.props;

    fetchAllPages();
    fetchAllPosts();
  }

  componentDidMount() {
    this.setState({loaded: true});
  }

  render() {
    const { fetchedPosts, fetchedPages, pages, posts } = this.props;
    const clientClass = window.innerWidth > parseInt(variables.sm, 10) ? baseStyles.centerVert : null;

    return (
      <div className={baseStyles.pt5}>
        <HomepageHeader display={this.state.loaded}/>
        <Container>
          <HomepageSection title='Select Work'>
            <Row>
              { pages.map((page, key) => (
                <Col xs={12} md={6} key={key}>
                  <WorkCard page={page} loaded={fetchedPages}/>
                </Col>
              ))}
            </Row>
          </HomepageSection>
          <HomepageSection title='Clients'>
            <Row className={clientClass}>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={Keurig} alt='Client' fit='contain' className={baseStyles.mb4}/>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={SeventhGen} alt='Client' fit='contain' className={styles.svnthGen} className={baseStyles.mb4}/>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={Mamava} alt='Client' fit='contain' className={baseStyles.mb4}/>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={HotelVT} alt='Client' style={{height: 50}} fit='contain' className={baseStyles.mb4}/>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={Champlain} alt='Client' fit='contain' className={baseStyles.mb4}/>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={Wildfire} alt='Client' fit='contain' className={baseStyles.mb4}/>
              </Col>
            </Row>
          </HomepageSection>
          <HomepageSection title='Writing'>
            { posts.map((post, key) => (
              <BlogPostCard
                post={post}
                key={key}
                loaded={fetchedPosts}
              />
            ))}
          </HomepageSection>
        </Container>
      </div>
    );
  }

  state = {
    loaded: false
  };
}

const mapStateToProps = (state) => ({
  fetchedPosts: state.postReducer.fetched,
  fetchedPages: state.pageReducer.fetched,
  pages: state.pageReducer.pages,
  posts: state.postReducer.posts,
  workPosts: state.postReducer.posts
});

export default connect(mapStateToProps, {
  fetchAllPages,
  fetchAllPosts
})(Homepage);
