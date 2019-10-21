import React from 'react';
import { Button, Div } from '@vkontakte/vkui/';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import backside from '../img/back-side.png';
import frontCard from '../img/polygon.png';
import backCard from '../img/chest-cover.jpg';
import BackSides from './items/BackSides';
import coinIco from '../img/coin.png';
import Stars from './items/Stars';
import legendBack from '../img/b-rang-legend.png';
import rareBack from '../img/b-rang-simple.png';
import basicBack from '../img/b-rang-basic.png';
import noneRang from '../img/b-rang-none.png'
import '../components/Card.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null, //текущая картинка
      bImg: null, //сундук
      fImg: null, //гарипотер
      open: false,
      pack: 4,
      rotate: false,
      checkLast: false,
      cardAnimation: ''
    };
  };

  componentDidMount() {
    this.setState({ pack: this.props.data.packSize - 1 });
    const card = document.querySelector('.card');
    const chest = document.querySelector('.chest');
    const stack = document.querySelector('.stack');
    const chestImg = new Image();
    const backImg = new Image();
    const translateStack = - 20 - (5 * this.state.pack);

    card.setAttribute('style', 'opacity: 0; display: none; transition: opacity .5s ; ');
    stack.setAttribute('style', `opacity: 0; display: none; right: ${translateStack}px `);
    chestImg.onload = () => {
      chest.setAttribute('style', `animation:chestAnim 2s ease-out both; background: url(${chestImg.src}) center no-repeat; background-size: contain;`);
      backImg.onload = () => {
        const interval = setInterval(() => {
          const theCSSprop = window.getComputedStyle(chest, null)
            .getPropertyValue('opacity');
          
          if (theCSSprop === '0') {
            chest.remove();
            card.setAttribute('style', 'opacity: 1; display: flex; transition: opacity .5s;');
            stack.setAttribute('style', `opacity: 1; display: inline-block; right: ${translateStack}px`);
            this.setState({ img: backImg.src, bImg: backImg });
            clearInterval(interval);
          }
        }, 10)
      };
      backImg.src = backCard;
    }
    chestImg.src = this.props.data.chest;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      if (this.state.pack < 0) {
        this.props.go('box-list');
      }
    }
  }

  pullCard = () => {
    const stack = document.querySelector('.stack');
    const card = document.querySelector('.card');
    const top = 18 + (16 / this.state.pack);
    const translateStack = - 10 - (5 * this.state.pack);
    const interval = setInterval(() => {
      const theCSSprop = window.getComputedStyle(stack, null)
        .getPropertyValue('right');

        if (theCSSprop === `${translateStack}px`) {
          card.style.transition = 'opacity 1s';
          card.style.opacity = '1';
          this.setState({checkLast:false});
          clearInterval(interval);
        }
        
    }, 100)

    stack.style.right = `${translateStack}px`;
    stack.style.top = `${top}px`;
  }

  openCard = () => {
    const card = document.querySelector('.card');
    const frontImg = new Image();
    this.setState({ open: true, rotate: true });
    frontImg.onload = () => {
      this.setState({ cardAnimation: 'flipScaleUpVer 350ms ease-in both' });
      const interval = setInterval(() => {
        const theCSSprop = window.getComputedStyle(card, null)
          .getPropertyValue('z-index');
        if (theCSSprop === '100') {
          this.setState({ img: frontImg.src, fImg: frontImg, cardAnimation: 'flipScaleDownVer 350ms ease-out both'});
        }
        if (theCSSprop === '200') {
          this.setState({ rotate: false });
          clearInterval(interval);
        }
      }, 10)
    }
    frontImg.src = frontCard;
  }

  destroyCard = () => {
    const card = document.querySelector('.card');
    const label = document.querySelector('.card-label');
    const counts = document.querySelector('.card-points');
    label.style.display = 'none';
    counts.style.display = 'none';
    const interval = setInterval(() => {
      const theCSSprop = window.getComputedStyle(card, null)
        .getPropertyValue('opacity');

      if (theCSSprop === '0') {
        card.style.opacity = '0';
        card.style.animation = '';
        this.setState({ img: this.state.bImg.src, pack: this.state.pack - 1, open: false });
        this.pullCard();
        clearInterval(interval);
      }
    }, 10)

    card.style.animation = 'destroyCard .5s linear both';
  }

  takeCard = () => {
    const card = document.querySelector('.card');
    const label = document.querySelector('.card-label');
    const counts = document.querySelector('.card-points');
    label.style.display = 'none';
    counts.style.display = 'none';
    const interval = setInterval(() => {
      const theCSSprop = window.getComputedStyle(card, null)
        .getPropertyValue('opacity');
      if (theCSSprop === '0') {
        card.style.opacity = '0';
        card.style.transition = 'opacity 0s';
        card.style.animation = '';
        
        this.setState({ img: this.state.bImg.src, pack: this.state.pack - 1,open: false, checkLast: true });
        this.pullCard();
        clearInterval(interval);
      }
    }, 10)
    
    card.style.animation = 'takeCard 350ms ease-in both';
  }

  render() {
    const { pack, img, open, rotate, cardAnimation } = this.state;
    const { title, collection, rang } = this.props.data;
    const rangsTitle = ['rang-silver', 'rang-blue', 'rang-gold'];
    const rangsImgs = [basicBack, rareBack, legendBack];
    const rangsImgActiv = open && !rotate ? rangsImgs[rang] : noneRang;
    const rangColor = open && !rotate ? rangsTitle[rang] : 'rang-none';
    const rangStars = rang === 2 ? <Stars/> : '';
    const rangTitle = ['Обычный', 'Эпичный', 'Легендарный'];
    const btnContainer = open && !rotate ? (
      <Div>
        <Button className='btn' onClick={this.destroyCard} after={<img className='coin-ico' src={coinIco} alt=''/>} size='xl' level="destructive">Разбить дубликат и получить +30</Button>
        <Button className='btn' before={<Icon24Camera/>} size="xl">Поделиться в истории</Button>
        <Button className='btn' size="xl">Подарить другу</Button>
      </Div>
    ) : '';
    const styleCard = {
      animation: cardAnimation
    }
    const count = open && !rotate ? <span className="card-points">x2</span> : '';
    const label = open && !rotate ? (<div className={`card-label ${rangColor}`} onClick={ open ? rotate ? () =>{} : this.takeCard : this.openCard }>
      <p>{`${rangTitle[rang]} ${title}`}</p>
      <p>Коллекция: {collection}</p>
      {rangStars}
    </div>) : '';
    
    return (
      <>
        <div className='card-container'>
          <div className="chest"/>
          {count}
          <div className="card" style={styleCard} onClick={ open ? rotate ? () =>{} : this.takeCard : this.openCard }>
            <img className='rang-background' src={rangsImgActiv} alt="" />
            <div className='r-hex'>
              <div className='r-hex-inner'>
                <div className='r-hex-inner-border'>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
          {label}
          
          <BackSides numTimes={this.state.checkLast ? pack + 1 : pack}>
            {(index) => <img key={index} className={`back-side-${index}`} src={backside} alt="" />}
          </BackSides>
        </div>
        {btnContainer}
      </>
    );
  }
}

export default Card;
