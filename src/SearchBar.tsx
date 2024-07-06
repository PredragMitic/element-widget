import React from 'react';

const SearchBar = (prop: {
  handleSearchChange: (e: React.FormEvent<HTMLInputElement>) => void
  handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => unknown
}) => {
  return (
    <div className="search-bar">
      <label  className='search'>
        Search
        <input className="search-input" onChange={prop.handleSearchChange}/>
      </label>
      <label  className='filter'>
        Filter
        <select className="filter-input" onChange={(e) => prop.handleFilterChange(e)}>
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