import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  useMediaQuery,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import getDetails from './helpers/getDetails';
import { useTheme } from '@material-ui/core/styles';
import NotFound from './NotFound';

const Cards = ({ van }) => {
  const [count, setCount] = useState(8);
  const [details, setDetails] = useState({});
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const newVan = Object.values(van);
  const counter = newVan.length;
  const updateCount = () => {
    if (count <= counter) {
      setCount(count + 4);
    } else {
      setCount(counter);
      window.scrollTo(0);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const fetchDetails = id => {
    getDetails(id).then(newDetails => {
      setDetails(newDetails);
      setOpen(true);
    });
  };

  const toTop = () => {
    window.scroll(0, 0);
  };

  const reload = () => {
    location.reload();
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={true}
      >
        <DialogTitle className="title">
          <CloseIcon edge="end" className="close-button" onClick={handleClose}></CloseIcon>
        </DialogTitle>
        <div className="dialog-content">
          <Card className="box-details" key={details.id}>
            {details.arrayImgs ? (
              !fullScreen ? (
                details.arrayImgs.slice(0, 2).map((el, index) => {
                  return (
                    <CardMedia
                      key={index}
                      className="image-detail"
                      component="img"
                      image={el}
                    ></CardMedia>
                  );
                })
              ) : (
                details.arrayImgs.slice(0, 1).map((el, index) => {
                  return (
                    <CardMedia
                      key={index}
                      className="image-detail"
                      component="img"
                      image={el}
                    ></CardMedia>
                  );
                })
              )
            ) : (
              <NotFound handleClose={handleClose}></NotFound>
            )}
          </Card>
        </div>
        <CardContent className="details-container">
          <div className="info-details">
            <h6 className="location">
              {details.type} - {details.location}
            </h6>
            <div className="price-detail">
              <p className="price-text">${details.price}</p>
            </div>
            <p className="description-details">{details.vehicule}</p>
            <div className="owner-info">
              <img alt="details-images" src={details.avatar} className="avatar"></img>
              <p className="name">{details.name}</p>
            </div>
          </div>
        </CardContent>
      </Dialog>
      <div className="grid">
        {newVan.splice(0, count).map(item => {
          const price = item.price.toString().slice(0, 3);
          return (
            <div key={item.id}>
              <Card className="box">
                <CardMedia
                  className="image"
                  component="img"
                  image={
                    item
                      ? item?.url
                      : 'https://odc-img.herokuapp.com/insecure/czM6Ly9vdXRkb29yc3ktdXNlci1pbWFnZXMtdXMtd2VzdC0yL3Jlcy9vdXRkb29yc3kvaW1hZ2UvdXBsb2FkL3AvcmVudGFscy80MzY1NC9pbWFnZXMvcWcyd2ppZjZ0amt3ZDB4Z21jZ3UvMTUyMjg3NzYwNi5qcGc='
                  }
                  onClick={() => fetchDetails(item.id)}
                />
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
            <div className="button-ref">
              <button className="button" id="refresh" onClick={() => reload()}>
                Refresh
              </button>
              <button className="button" id="top" onClick={() => toTop()}>
                Go to top
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
