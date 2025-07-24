import React from 'react';
import './button.css';

const handleClick = (e) => e.target.textContent = 'Clicked!';

const Button = ({ label }) => (
    <button className='button' onClick={handleClick}>
        {label}
    </button>
);

export default Button;