import React from 'react';

const BackSides = (props) => {
  const items = [];
  
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }

  return <div className='cards-back-sides'>{items}</div>;
};

export default BackSides;
