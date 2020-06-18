import PropTypes from 'prop-types';
import React from 'react';

SearchForm.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
};

function SearchForm({ setSearchValue }) {
  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
  };

  return (
    <div className="form-group form-search">
      <input
        onChange={handleChange}
        type="text"
        className="form-control"
        placeholder="Tìm kiếm"
      />
      <i className="ti-search" />
    </div>
  );
}

export default SearchForm;
