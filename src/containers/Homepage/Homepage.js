import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-grid-system';
import {
  BlogPostCard,
  HomepageSection,
  ProgressiveImage,
  WorkCard
} from '_components';
import styles from './Homepage.css';
import baseStyles from '_styles/index.css';
import HeaderImg from './header-img.jpg';
import HeadLine from './headline.svg';
import Keurig from './keurig_logo.svg';
import SeventhGen from './seventh_gen_logo.svg';
import Mamava from './mamava_logo.svg';
import HotelVT from './hotel_vt_logo.svg';
import Champlain from './champlain_logo.svg';
import Wildfire from './wildfire_logo.svg';
import { fetchAllPages } from '_actions/pageActions';
import { fetchAllPosts } from '_actions/postActions';

class Homepage extends Component {
  componentWillMount() {
    const { fetchAllPages, fetchAllPosts } = this.props;

    fetchAllPages();
    fetchAllPosts();
  }

  render() {
    const { fetchedPosts, fetchedPages, pages, posts } = this.props;

    return (
      <div className={baseStyles.pt5}>
        <div className={styles.header}>
          <div className={styles.image}>
            <ProgressiveImage src={HeaderImg} alt='Header'/>
            <object data={HeadLine} alt='Make It Matter' aria-label='Make It Matter' className={styles.headline}/>
          </div>
        </div>
        <Container>
          <HomepageSection title='Select Work'>
            <Row>
              { pages.map((page, key) => (
                <Col xs={6} key={key}>
                  <WorkCard page={page} loaded={fetchedPages}/>
                </Col>
              ))}
            </Row>
          </HomepageSection>
          <HomepageSection title='Clients'>
            <Row className={baseStyles.centerVert}>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={Keurig} alt='Client' fit='contain'/>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={SeventhGen} alt='Client' fit='contain' className={styles.svnthGen}/>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={Mamava} alt='Client' fit='contain'/>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={HotelVT} alt='Client' style={{height: 50}} fit='contain'/>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={Champlain} alt='Client' fit='contain'/>
              </Col>
              <Col xs={6} md={4} lg={2}>
                <ProgressiveImage src={Wildfire} alt='Client' fit='contain'/>
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
