import React, { useState, useEffect } from 'react';
import getDetails from './helpers/getDetails';
import { useRouter } from 'next/router';

const CardDetails = ({
  match: {
    params: { id },
  },
}) => {
  const [info, setInfo] = useState;
  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    carInfo();
  }, []);
  const carInfo = () => {
    getDetails(id).then(newInfo => {
      setInfo(newInfo);
    });
  };
  if (!info) {
    return <h2>{pid}...</h2>;
  }
  return (
    <div>
      <h1>Hello</h1>
      <h2>{info.name}</h2>
    </div>
  );
};

export default CardDetails;
