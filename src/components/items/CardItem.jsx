import React from 'react';
import legendBack from '../../img/b-rang-legend.png';
import rareBack from '../../img/b-rang-simple.png';
import basicBack from '../../img/b-rang-basic.png';
import Stars from '../items/Stars';

const CardItem = (props) => {
  const rangs = [basicBack, rareBack, legendBack];
  const start = props.rang === 2 ? <Stars/> : '';
  const rangTitle = ['Обычный', 'Эпичный', 'Легендарный'];
  return (
      <div className='collection-item' onClick={props.go}>
        <img className='rang-background' src={rangs[props.rang]} alt=""/>
        <div className='r-hex'>
          <div className='r-hex-inner'>
            <div className='r-hex-inner-border'>
              <img src={props.img} alt='' />
            </div>
          </div>
        </div>
        <p className='card-title-rang'>{rangTitle[props.rang]}</p>
        <p className='card-title'>{props.title}</p>
        {start}
      </div>
  )
}

export default CardItem;
