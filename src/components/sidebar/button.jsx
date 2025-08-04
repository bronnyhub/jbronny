import React from 'react';
import './button.css';

const handleClick = (label) => {
  const path = `/${label.toLowerCase()}`;
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

const Button = ({ label }) => (
  <button className='button' onClick={() => handleClick(label)}>
    {label}
  </button>
);

export default Button;