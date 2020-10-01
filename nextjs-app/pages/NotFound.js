import React from 'react';

const NotFound = ({ handleClose }) => (
  <>
    <h1 className="error">404 - Not Found!</h1>
    <div className="center">
      <button className="button" onClick={() => handleClose(false)}>
        Close
      </button>
    </div>
  </>
);

export default NotFound;
