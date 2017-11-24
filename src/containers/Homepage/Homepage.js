import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-grid-system';
import { BlogPostCard, HomepageSection, ProgressiveImage, WorkCard } from '_components';
import styles from './Homepage.css';
import baseStyles from '_styles/index.css';
import HeaderImg from './header-img.jpg';
import HeadLine from './headline.svg';
import Keurig from './keurig_logo.png';
import SeventhGen from './seventh_gen_logo.png';
import Mamava from './mamava_logo.png';
import HotelVT from './hotel_vt_logo.png';

import { fetchAllPosts } from '_actions/postActions';

class Homepage extends Component {
  componentWillMount() {
    const { fetchAllPosts } = this.props;

    fetchAllPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <div className={baseStyles.pt5}>
        <div className={styles.header}>
          <div className={styles.image}>
            <ProgressiveImage src={HeaderImg} alt='Header'/>
            <object data={HeadLine} alt='Make It Matter' aria-label='Make It Matter' className={styles.headline}/>
          </div>
        </div>
        <Container>
          <HomepageSection title='Select Work' subTitle="Lorem Ipsum">
            <Row>
              <Col xs={6}>
                <WorkCard imgSrc={HeaderImg} title='Work Example' />
              </Col>
              <Col xs={6}>
                <WorkCard imgSrc={HeaderImg} title='Work Example' />
              </Col>
              <Col xs={6}>
                <WorkCard imgSrc={HeaderImg} title='Work Example' />
              </Col>
              <Col xs={6}>
                <WorkCard imgSrc={HeaderImg} title='Work Example' />
              </Col>
              <Col xs={6}>
                <WorkCard imgSrc={HeaderImg} title='Work Example' />
              </Col>
              <Col xs={6}>
                <WorkCard imgSrc={HeaderImg} title='Work Example' />
              </Col>
            </Row>
          </HomepageSection>
          <HomepageSection title='Select Work' subTitle="Lorem Ipsum">
            <Row>
              <Col xs={2}>
                <ProgressiveImage src={Keurig} alt='Client' />
              </Col>
              <Col xs={2}>
                <ProgressiveImage src={SeventhGen} alt='Client' />
              </Col>
              <Col xs={2}>
                <ProgressiveImage src={Mamava} alt='Client' />
              </Col>
              <Col xs={2}>
                <ProgressiveImage src={HotelVT} alt='Client' />
              </Col>
              <Col xs={2}>
                <ProgressiveImage src={HeaderImg} alt='Client' />
              </Col>
              <Col xs={2}>
                <ProgressiveImage src={HeaderImg} alt='Client' />
              </Col>
            </Row>
          </HomepageSection>
          <HomepageSection title='Writing' subTitle='Musing from our blog'>
            { posts.map((post, key) => (
              <Row key={key}>
                <BlogPostCard
                  image={posts[0]._embedded['wp:featuredmedia'][0].source_url}
                  title={post.title.rendered}
                  author='Jonathan Blair'
                  blurb={post.excerpt.rendered}
                />
              </Row>
            ))}
          </HomepageSection>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
  media: state.mediaReducer.media
});

export default connect(mapStateToProps, { fetchAllPosts })(Homepage);
