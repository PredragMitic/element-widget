import React, { useState } from 'react';

const SearchBar = ({ applyFilters }: { applyFilters: (searchWord: string, filterLimit: number) => void }) => {
  const [searchWord, setSearchWord] = useState('');
  const [filterLimit, setFilterLimit] = useState(0);

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    const word = e.currentTarget.value
    setSearchWord(word);
    applyFilters(word, filterLimit);
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const limit = Number(e.currentTarget.value)
    setFilterLimit(limit);
    applyFilters(searchWord, limit);
  }

  return (
    <div className="search-bar">
      <label className='search'>
        Search
        <input className="search-input" onChange={handleSearchChange} />
      </label>
      <label className='filter'>
        Filter
        <select className="filter-input" onChange={(e) => handleFilterChange(e)}>
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