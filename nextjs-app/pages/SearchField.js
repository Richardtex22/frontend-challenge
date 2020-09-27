import React, { useState } from 'react';

const SearchField = () => {
  const [search, setSearch] = useState('');
  const getValue = e => {
    let value = e.target.value;
    setSearch(value);
    console.log(search);
    return value;
  };

  const styles = {
    display: 'flex',
    alignItems: 'center ',
  };
  return (
    <div className="mx-auto mt-8">
      <form>
        <div style={styles}>
          <input className="text-field" type="text" label="Filter"></input>
          <button className="button" onClick={() => getValue()}>
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
