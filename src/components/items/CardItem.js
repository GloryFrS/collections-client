import React from 'react';
import legendBack from '../../img/b-rang-legend.png';
import rareBack from '../../img/b-rang-simple.png';
import basicBack from '../../img/b-rang-basic.png';

const CardItem = (props) => {
  const rangs = [basicBack, rareBack, legendBack];
  const rangTitle = ['Обычный', 'Эпичный', 'Легендарный'];
  const { rang, title, img, collection } = props;
  const data = { rang, title, img, collection };

  return (
      <div className='collection-item' onClick={()=> props.open(data)}>
        <img className='rang-background' src={rangs[rang]} alt=""/>
        <div className='r-hex'>
          <div className='r-hex-inner'>
            <div className='r-hex-inner-border'>
              <img src={img} alt='' />
            </div>
          </div>
        </div>
        <p className='card-title-rang'>{rangTitle[rang]}</p>
        <p className='card-title'>{title}</p>
      </div>
  )
};

export default CardItem;
