import React from 'react';
import StarImg from '../../img/star.svg';
import './Stars.scss';

const Stars = () => {
  let starsArr = ['star1','star2','star3','star4'];
  
  return (
    <div className = 'stars'>
      {
        starsArr.map((classStar, index) => <img className = {classStar} key={index} src={StarImg} alt='' />)
      }
    </div>
  )
}

export default Stars;
