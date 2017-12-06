import cn from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'react-grid-system';
import { clearActivePage, fetchPage } from '_actions/pageActions';
import { Authors, Header, WPContent } from '_components';
import baseStyles from '_styles/index.css';
import styles from './WorkPage.css';

class WorkPage extends Component {
  componentWillMount() {
    const { fetchPage, params } = this.props;

    fetchPage(params.id);
  }


  componentWillUnmount() {
    this.props.clearActivePage();
  }

  render() {
    const { page } = this.props;

    if(!page) {
      return null;
    }

    return (
      <div className={baseStyles.pt4}>
        <Header src={page._embedded['wp:featuredmedia'][0].source_url} />
        <Container className={styles.content}>
          <Row>
            <Col xs={12}>
              <h1 className={styles.title}>{page.title.rendered}</h1>
            </Col>
          </Row>
          <Row className={baseStyles.mb4}>
            <Col xs={2}>
              <span className={cn(styles.block, baseStyles.patternHash)} />
            </Col>
            <Col xs={10}>
              <Authors authors={page._embedded.author} textClass={baseStyles.faded} />
            </Col>
            <Col xs={12}>
              <hr className={baseStyles.mt0}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={8}>
              <WPContent content={page.content.rendered} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.pageReducer.activePage,
  pageError: state.pageReducer.error
});

export default connect(mapStateToProps, {
  clearActivePage,
  fetchPage
})(WorkPage);
