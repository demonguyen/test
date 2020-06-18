import PropTypes from 'prop-types';
import React from 'react';
import DashboardAction from '../DashBoardActions';
import DashboardHeading from '../DashboardHeading';

DashboardHeader.propTypes = {
  indexOfFirstList: PropTypes.number.isRequired,
  indexOfLastList: PropTypes.number.isRequired,
  handleSetIndexOfList: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  totalList: PropTypes.number.isRequired,
};

function DashboardHeader({
  indexOfFirstList,
  indexOfLastList,
  handleSetIndexOfList,
  totalList,
  setSearchValue,
}) {
  return (
    <div className="page-header card">
      <div className="row align-items-end">
        <DashboardHeading />
        <DashboardAction
          totalList={totalList}
          indexOfFirstList={indexOfFirstList}
          indexOfLastList={indexOfLastList}
          handleSetIndexOfList={handleSetIndexOfList}
          setSearchValue={setSearchValue}
        />
      </div>
    </div>
  );
}

export default DashboardHeader;
