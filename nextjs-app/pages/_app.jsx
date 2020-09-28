import React, { useState, useEffect } from 'react';
import SearchField from './SearchField';
import Cards from './Cards';
import '../styles.css';
import getVans from './helpers/getVans';

export default function App() {
  const [van, setVan] = useState({});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchVans();
  }, []);

  const fetchVans = input => {
    getVans(input).then(newVans => {
      setVan(newVans);
      setCounter(newVans.length);
    });
  };

  return (
    <>
      <div className="cont">
        <SearchField fetchVans={fetchVans} />
        <Cards van={van} counter={counter} fetchVans={fetchVans} />
      </div>
    </>
  );
}
