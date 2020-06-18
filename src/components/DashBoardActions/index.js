import PropTypes from 'prop-types';
import React from 'react';
import Pagination from '../Pagination';
import SearchForm from '../SearchForm';

DashboardAction.propTypes = {
  indexOfFirstList: PropTypes.number.isRequired,
  indexOfLastList: PropTypes.number.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  handleSetIndexOfList: PropTypes.func.isRequired,
  totalList: PropTypes.number.isRequired,
};

function DashboardAction({
  indexOfFirstList,
  indexOfLastList,
  handleSetIndexOfList,
  totalList,
  setSearchValue,
}) {
  return (
    <div className="col-auto" style={{ marginLeft: 'auto' }}>
      <SearchForm setSearchValue={setSearchValue} />
      <div className="action-wrapper">
        <div className="row">
          <div className="sort-group">
            <div className="row">
              <div className="sort-item">
                <select
                  name="select"
                  className="form-control form-control-inverse fill"
                >
                  <option value="opt1">Lọc theo</option>
                  <option value="opt2">Type 2</option>
                  <option value="opt3">Type 3</option>
                  <option value="opt4">Type 4</option>
                  <option value="opt5">Type 5</option>
                  <option value="opt6">Type 6</option>
                  <option value="opt7">Type 7</option>
                  <option value="opt8">Type 8</option>
                </select>
              </div>
              <div className="sort-item">
                <select
                  name="select"
                  className="form-control form-control-inverse fill"
                >
                  <option value="opt1">Nhóm theo</option>
                  <option value="opt2">Type 2</option>
                  <option value="opt3">Type 3</option>
                  <option value="opt4">Type 4</option>
                  <option value="opt5">Type 5</option>
                  <option value="opt6">Type 6</option>
                  <option value="opt7">Type 7</option>
                  <option value="opt8">Type 8</option>
                </select>
              </div>
              <div className="sort-item">
                <select
                  name="select"
                  className="form-control form-control-inverse fill"
                >
                  <option value="opt1">Ưu thích</option>
                  <option value="opt2">Type 2</option>
                  <option value="opt3">Type 3</option>
                  <option value="opt4">Type 4</option>
                  <option value="opt5">Type 5</option>
                  <option value="opt6">Type 6</option>
                  <option value="opt7">Type 7</option>
                  <option value="opt8">Type 8</option>
                </select>
              </div>
            </div>
          </div>
          <Pagination
            totalList={totalList}
            indexOfFirstList={indexOfFirstList}
            indexOfLastList={indexOfLastList}
            handleSetIndexOfList={handleSetIndexOfList}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardAction;
