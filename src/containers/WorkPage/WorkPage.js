import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'react-grid-system';
import { clearActivePage, fetchPage } from '_actions/pageActions';
import { Header, WPContent } from '_components';
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
      <div className={styles.container}>
        <div className={styles.header}>
          <Header src={page._embedded['wp:featuredmedia'][0].source_url} />
        </div>
        <Container className={styles.content}>
          <Row>
            <Col xs={12}>
              <h1 className={styles.title}>{page.title.rendered}</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <WPContent content={page.content.rendered} type='work'/>
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
