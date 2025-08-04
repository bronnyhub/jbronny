import React from 'react';
import './loading.css';

const LoadingBar = () => {
  return (
    <div className="loading-bar-container">
      <div className="loading-bar-fill" />
        <div className="loading-bar-text">Come back soon...</div>
    </div>
  );
};

export default LoadingBar;
