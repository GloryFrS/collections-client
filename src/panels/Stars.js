import React from 'react';
import star from '../img/star.svg';
import '../style/stars.scss';

const Stars = () => {
  
  return (
    <div className = 'stars'>
      <img className = 'star1' src={star} />
      <img className = 'star2' src={star} />
      <img className = 'star3' src={star} />
      <img className = 'star4' src={star} />
    </div>
  )
}

export default Stars;
