import React, { useState, useEffect } from 'react';

const SearchField = ({ fetchVans }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    updateVans(search);
  }, []);

  const updateVans = search => {
    fetchVans(search);
    setSearch('');
  };
  return (
    <>
      <p className="header">Campervans</p>
      <label className="label" htmlFor="search">
        Filter
      </label>
      <div className="text-container">
        <input
          className="text-field"
          id="search"
          value={search}
          type="text"
          label="Filter"
          onChange={e => setSearch(e.target.value)}
        ></input>
        <button className="button" onClick={() => updateVans(search)}>
          Filter
        </button>
      </div>
    </>
  );
};

export default SearchField;
