import React from 'react';
import backside from '../img/back-side.png';
import BackSides from "./items/BackSides";
import '../components/Card.scss';
// import '../styles/rangs.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4
    };
  };

  render() {
    const { count } = this.state;
    const { title, collection, img, rang } = this.props.data;
    const rangs = ['rang-silver', 'rang-blue', 'rang-gold'];
    const rangColor = rangs[rang];
    const rangStyle = rang === 2 ? `card-label ${rangColor} card-stars` : `card-label ${rangColor}`
    return (
      <>
        <div className='card-container'>
          <div className='r-hex-rang'>
            <div className='r-hex-inner'>
              <div className={`r-hex-inner-3 ${rangColor}`}></div>
            </div>
          </div>
          <div className='r-hex-black'>
            <div className='r-hex-inner'>
              <div className='r-hex-inner-2'></div>
            </div>
          </div>
          <span className="card-points">x2</span>
          <div className='r-hex'>
            <div className='r-hex-inner'>
              <div className='r-hex-inner-2'>
                <img src={img} alt="" />
              </div>
            </div>
          </div>
          <div className={rangStyle}>
            <p>{title}</p>
            <p>Коллекция: {collection}</p>
          </div>
          <BackSides numTimes={count}>
            {(index) => <img key={index} src={backside} alt="" />}
          </BackSides>
        </div>
      </>
    );
  }
}

export default Card;
