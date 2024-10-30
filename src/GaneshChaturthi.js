import React, { useState, useEffect } from 'react';
import './Deepavali.css';
import ganesh from'./images/ganesh.jpeg';

const Deepavali = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    setShowMessage(true);
  };

  useEffect(() => {
    document.body.classList.add('body-deepavali');
    return () => {
      document.body.classList.remove('body-deepavali');
    };
  }, []);

  return (
    <div className="container">
      <button className="button" onClick={handleClick}>
        Happy Deepavali
      </button>
      {showMessage && (
        <div>
          <h1>Once again Happy Deepavali</h1>
          <p>May this Deepavali bring joy, light, and prosperity to your life. Wishing you a festive season filled with happiness and peace!</p>
        </div>
      )}
    </div>
  );
};

export default Deepavali;