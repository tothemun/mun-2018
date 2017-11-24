import React, { Component } from 'react';
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

class Homepage extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className={baseStyles.pt5}>
        <div className={styles.header}>
          <div className={styles.image}>
            <img src={HeaderImg} />
            <object data={HeadLine} alt='Make It Matter' className={styles.headline}/>
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
          <HomepageSection>
            <Row>
              <BlogPostCard
                image='https://images.unsplash.com/photo-1500043189552-8feddf8d9f64?auto=format&fit=crop&w=1934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
                title='On Writing and Logs'
                author='Jonathan Blair'
                blurb='This is an example blog post where we go into great detail about something and blow everyones mind with our insight.'
              />
              <BlogPostCard
                image='https://images.unsplash.com/photo-1500043189552-8feddf8d9f64?auto=format&fit=crop&w=1934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
                title='On Writing and Logs'
                author='Jonathan Blair'
                blurb='This is an example blog post where we go into great detail about something and blow everyones mind with our insight.'
              />
            </Row>
          </HomepageSection>
        </Container>
      </div>
    );
  }
}

export default Homepage;
