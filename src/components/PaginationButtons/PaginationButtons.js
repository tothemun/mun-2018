import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PaginationButtons.css';

const PaginationButtons = ({ currentPage, handleClick, handleNext, handlePrevious, totalPages}) => (
  <div>
    <button className={styles.button} onClick={handlePrevious} disabled={currentPage === 1}>
      <h5>Previous</h5>
    </button>
    {[...Array(totalPages)].map((x, i) =>
      <button
        className={cn(styles.button, {[styles.active]: i + 1 === currentPage})}
        key={i}
        onClick={() => handleClick(i + 1)}
      >
        <h5>{i + 1}</h5>
      </button>
    )}
    <button className={styles.button} onClick={handleNext} disabled={currentPage >= totalPages}>
      <h5>Next</h5>
    </button>
  </div>
);

PaginationButtons.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
  handleNext: PropTypes.func,
  handlePrevious: PropTypes.func,
  totalPages: PropTypes.number.isRequired
};

PaginationButtons.defaultProps = {
  currentPage: 1
};

export default PaginationButtons;
