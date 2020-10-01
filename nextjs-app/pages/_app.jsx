import React, { useState, useEffect } from 'react';
import SearchField from './SearchField';
import Cards from './Cards';
import getVans from './helpers/getVans';
import './_app.css';
import '../styles.css';

export default function App() {
  const [van, setVan] = useState({});
  const [counter, setCounter] = useState(0);
  //const [details, setDetails] = useState({});

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
        <Cards van={van} counter={counter} />
      </div>
    </>
  );
}
