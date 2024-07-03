import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <label  className='search'>
        Search
        <input className="search-input"/>
      </label>
      <label  className='filter'>
        Filter
        <select className="filter-input">
          <option value="" hidden>No filter</option>
          <option value="10"> &gt;10 </option>
          <option value="100"> &gt;100 </option>
          <option value="200"> &gt;200 </option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;