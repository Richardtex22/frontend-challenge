import React, { useState, useEffect } from 'react';
import SearchField from './SearchField';
import Cards from './Cards';
import '../styles.css';
import getVans from './helpers/getVans';

const initialCar = {
  id: 1,
  img:
    'https://odc-img.herokuapp.com/insecure/czM6Ly9vdXRkb29yc3ktdXNlci1pbWFnZXMtdXMtd2VzdC0yL3Jlcy9vdXRkb29yc3kvaW1hZ2UvdXBsb2FkL3AvcmVudGFscy8zNDYzNS9pbWFnZXMvamZsNmRpMnZua3pnNnN5Mno0bzcvMTUxOTc1MzM5Ni5qcGc=',
  location: 'Camper Van - Costa Mesa, Ca',
  description: 'Volkswagen Big Beautiful Bay Windows: Westfalia',
  details: '$185 ***** (12)',
};

export default function App() {
  const [van, setVan] = useState({ initialCar });
  const [counter, setCounter] = useState(0);

  const fetchVans = () => {
    getVans().then(newVans => {
      setVan(newVans);
      setCounter(newVans.length);
    });
  };

  useEffect(() => {
    fetchVans();
  }, []);

  return (
    <div>
      <h1 className="header">Campervans</h1>
      <SearchField />
      <Cards van={van} counter={counter} fetchVans={fetchVans} />
    </div>
  );
}
