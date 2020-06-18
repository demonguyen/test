import PropTypes from 'prop-types';
import React from 'react';

Pagination.propTypes = {
  indexOfFirstList: PropTypes.number.isRequired,
  indexOfLastList: PropTypes.number.isRequired,
  handleSetIndexOfList: PropTypes.func.isRequired,
  totalList: PropTypes.number.isRequired,
};

function Pagination({
  indexOfFirstList,
  indexOfLastList,
  totalList,
  handleSetIndexOfList,
}) {
  return (
    <div className="pagination">
      <div className="pagination-show-page">
        <span>{`${indexOfFirstList + 1}-${
          indexOfLastList + 1
        }/${totalList}`}</span>
      </div>
      <div className="pagination-action">
        <button
          onClick={() => handleSetIndexOfList('prev')}
          disabled={indexOfFirstList === 0}
          type="button"
        >
          <i className="ti-angle-left" />
        </button>
        <button
          onClick={() => handleSetIndexOfList('next')}
          disabled={indexOfLastList >= totalList - 1}
          type="button"
        >
          <i className="ti-angle-right" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
