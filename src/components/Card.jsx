import React, { useState } from 'react';
import backside from '../img/back-side.png';
import '../components/Card.sass';
import '../components/rangs.css';

const Repeat = (props) => {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div className='cards-back-sides'>{items}</div>;
  }

const Card = (props) => {

    const [count, setCount] = useState(4);
    const rangs = ['rang-silver', 'rang-blue', 'rang-gold'];
    const rang = rangs[props.rang]; 
    return (
        <>
            <div className='card-container'> 
                <div className='r-hex-rang'>
                    <div className='r-hex-inner'>
                        <div className={`r-hex-inner-3 ${rang}`}></div>
                    </div>
                </div>
                <div className='r-hex-black'>
                    <div className='r-hex-inner'>
                        <div className='r-hex-inner-2'></div>
                    </div>
                </div>
                <div className='r-hex'>
                    <div className='r-hex-inner'>
                        <div className='r-hex-inner-2'>
                            <img src={props.img} alt=""/>
                        </div>
                    </div>
                </div>
                <Repeat numTimes={count}>
                    {(index) => <img key={index} src={backside} alt=""/>}
                </Repeat>
            </div>
        </>
    )
}

export default Card;
