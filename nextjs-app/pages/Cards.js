import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Cards = ({ van, counter }) => {
  const [count, setCount] = useState(8);

  const newVan = Object.values(van);

  const updateCount = () => {
    if (count <= counter) {
      setCount(count + 4);
    } else setCount(counter);
  };

  const reload = () => {
    location.reload();
  };

  return (
    <>
      <div className="grid">
        {newVan.splice(0, count).map(item => {
          const price = item.price.toString().slice(0, 3);
          return (
            <div key={item.id}>
              <Card className="box">
                <CardMedia className="image" component="img" image={item ? item.url : ''} />
                <CardContent className="info">
                  <h6 className="location">
                    {item.type} - {item.location}
                  </h6>
                  <p className="description">{item.name}</p>
                  <div className="details">
                    <p className="price">${price}</p>
                    <p className="icon" style={{ fontSize: 0 }}>
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarHalfIcon />
                    </p>

                    <p className="reviews">({item.reviews})</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="button-container">
        <div className="center">
          {count > counter ? (
            <div className="center">
              <h2 style={{ marginBottom: '2rem' }}>No results to display...</h2>
              <button className="button" onClick={() => reload()}>
                Home
              </button>
            </div>
          ) : (
            <button className="button" onClick={() => updateCount()}>
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
