import React, { useState } from 'react';

const SearchField = () => {
  const [search, setSearch] = useState('');
  const getValue = e => {
    let value = e.target.value;
    console.log(search);
    setSearch(value);
    return value;
  };
  console.log(getValue);

  const styles = {
    display: 'flex',
    alignItems: 'center ',
  };
  return (
    <div className="mx-auto mt-8">
      <form>
        <div style={styles}>
          <input className="text-field" type="text" label="Filter"></input>
          <button className="button">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default SearchField;
