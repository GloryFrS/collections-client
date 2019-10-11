import React from 'react';
import { Panel } from '@vkontakte/vkui';
import frontImgq from '../img/polygon.png';
import backImgq from '../img/persik.png';
import chestImgq from '../img/chest.svg';
import '../style/style.scss';
import Stars from '../panels/Stars';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      bImg: '',
      open: false,
      pack: 5,
      rotate: false,
    }
  }

  componentDidMount() {
    let card = document.querySelector(".card");
    let chest = document.querySelector(".chest");
    let stack = document.querySelector(".stack");
    let chestImg = new Image();
    let backImg = new Image();
    card.setAttribute('style', 'opacity: 0; display: none; transition: opacity .5s ; ');
    stack.setAttribute('style', `opacity: 0; display: none; right: ${-20 - (5* this.state.pack)}px `);
    chestImg.onload = () => {
    chest.setAttribute('style', `animation:chestAnim 2s ease-out both; background: url(${chestImg.src}) center no-repeat`);
    backImg.onload = () => {
      let interval = setInterval(() => {
        var theCSSprop = window.getComputedStyle(chest, null).getPropertyValue("opacity");
        if (theCSSprop === '0') {
          chest.remove();
          card.setAttribute('style', 'opacity: 1; display: inline-block; transition: opacity .5s;');
          stack.setAttribute('style', `opacity: 1; display: inline-block; right: ${-20 - (5* this.state.pack)}px`);
          this.setState({ img: backImg.src, bImg: backImg });
          clearInterval(interval);
        }
      }, 100)
    };
    backImg.src = backImgq;
  }
  chestImg.src = chestImgq;
  }

  pullCard = () => {
    let stack = document.querySelector(".stack");
    let card = document.querySelector(".card");
    stack.style.right = `${-20 - (5* this.state.pack)}px`;
    let interval = setInterval(() => {
      var theCSSprop = window.getComputedStyle(stack, null).getPropertyValue("right");
      if (theCSSprop === `${-20 - (5* this.state.pack)}px`) {
        card.style.display = "inline-block";
        clearInterval(interval);
      }
    }, 100)
  }
  openCard = () => {
    this.setState({ open: true, rotate: true });
    let card = document.querySelector(".card");
    let frontImg = new Image();
    card.style.animation = "flipScaleUpVer 500ms ease-in both";
    frontImg.onload = () => {
      let interval = setInterval(() => {
        let theCSSprop = window.getComputedStyle(card, null).getPropertyValue("z-index");
        if (theCSSprop === '1000') {
          this.setState({ img: frontImg.src, rotate: false });
          card.style.animation = "flipScaleDownVer 500ms ease-out both";
          clearInterval(interval);
        }
      }, 100)
    }
    frontImg.src = frontImgq;
  }

  destroyCard = () => {
    var card = document.querySelector(".card");
    card.style.animation = "destroyCard 1s linear both";
    let interval = setInterval(() => {
      var theCSSprop = window.getComputedStyle(card, null).getPropertyValue("opacity");
      if (theCSSprop === '0') {
        card.style.display = "none";
        card.style.animation = "";
        this.setState({ img: this.state.bImg.src, pack: this.state.pack-1,open: false });
        this.pullCard();
        clearInterval(interval);
      }
    }, 100)
  }

  takeCard = () => {
    let card = document.querySelector(".card");
    card.style.animation = "takeCard 500ms ease-in both";
    let interval = setInterval(() => {
      let theCSSprop = window.getComputedStyle(card, null).getPropertyValue("opacity");
      if (theCSSprop === '0') {
        card.style.animation = "";
        card.style.display = "none";
        this.setState({ img: this.state.bImg.src, pack: this.state.pack-1,open: false });
        this.pullCard();
        clearInterval(interval);
      }
    }, 100)
  }

  render() {
    return (
      <Panel id={
        this.props.id
      }>
      <div>
        {(this.state.open && !this.state.rotate)?
          <div className='btn' onClick={this.destroyCard}>spray</div>
        :
          ""
        }
      </div>
        <div className='chest'>
        </div>
        <div className="stack"></div>
        <div className='card' onClick={ this.state.open  ?  this.state.rotate ? () =>{} : this.takeCard : this.openCard}>
          <Stars />
          <div
            className='r-hex'>
            <div className='r-hex-inner'>
              <div className='r-hex-inner-next' >
                <img className='img' src={this.state.img} />
              </div>
            </div>
          </div></div>
      </Panel>
    )
  }
}

export default Home;
