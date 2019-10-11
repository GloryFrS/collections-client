import React from 'react';
import StarImg from '../img/star.svg';
import '../style/stars.scss';

const Stars = () => {
  let starsArr = ['star1','star2','star3','star4'];
  return (
    <div className = 'stars'>
      {
        starsArr.map((classStar) => 
        <img className = {classStar} src={StarImg} />
        )
      }
    </div>
  )
}

export default Stars;
