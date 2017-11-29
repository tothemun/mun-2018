import React from 'react';
import { Row, Col } from 'react-grid-system';
import baseStyles from '_styles/index.css';

const HomepageSection = ({ children, title, subTitle }) => (
  <div className={baseStyles.mb6}>
    <div className={baseStyles.mb4}>
      <Row>
        <Col xs={12}>
          <h2 className={baseStyles.mb0}>{title}</h2>
        </Col>
      </Row>
      { subTitle && (
        <Row>
          <Col xs={4}>
            <p className={baseStyles.mb0}>{subTitle}</p>
          </Col>
        </Row>
      )}
      </div>
    {children}
  </div>
);

export default HomepageSection;
