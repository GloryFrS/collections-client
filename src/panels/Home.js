import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Group, Cell, Avatar } from '@vkontakte/vkui/';
import Card from '../components/Card';
import img from '../img/polygon.png';
import frontImgq from '../img/polygon.png';
import backImgq from '../img/persik.png';
import chestImgq from '../img/chest.svg';
import '../style/style.scss';
import Stars from '../panels/Stars';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      bImg: null,
      fImg: null,
      open: false,
      pack: 5,
      rotate: false,
    };
  }

  componentDidMount() {
    const card = document.querySelector('.card');
    const chest = document.querySelector('.chest');
    const stack = document.querySelector('.stack');
    const chestImg = new Image();
    const backImg = new Image();
    const translateStack = - 20 - (5 * this.state.pack);

    card.setAttribute('style', 'opacity: 0; display: none; transition: opacity .5s ; ');
    stack.setAttribute('style', `opacity: 0; display: none; right: ${translateStack}px `);
    chestImg.onload = () => {
      chest.setAttribute('style', `animation:chestAnim 2s ease-out both; background: url(${chestImg.src}) center no-repeat`);
      backImg.onload = () => {
        const interval = setInterval(() => {
          const theCSSprop = window.getComputedStyle(chest, null)
            .getPropertyValue('opacity');
          
          if (theCSSprop === '0') {
            chest.remove();
            card.setAttribute('style', 'opacity: 1; display: inline-block; transition: opacity .5s;');
            stack.setAttribute('style', `opacity: 1; display: inline-block; right: ${translateStack}px`);
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
    const stack = document.querySelector('.stack');
    const card = document.querySelector('.card');
    const translateStack = - 20 - (5 * this.state.pack);
    const interval = setInterval(() => {
      const theCSSprop = window.getComputedStyle(stack, null)
        .getPropertyValue('right');

      if (theCSSprop === `${translateStack}px`) {
        card.style.display = 'inline-block';
        clearInterval(interval);
      }
    }, 100)
    
    stack.style.right = `${translateStack}px`;

  }

  openCard = () => {
    const card = document.querySelector('.card');
    const frontImg = new Image();

    this.setState({ open: true, rotate: true });
    card.style.animation = 'flipScaleUpVer 350ms ease-in both';
    frontImg.onload = () => {
      const interval = setInterval(() => {
        const theCSSprop = window.getComputedStyle(card, null)
          .getPropertyValue('z-index');

        if (theCSSprop === '100') {
          this.setState({ img: frontImg.src, rotate: false, fImg: frontImg });
          card.style.animation = 'flipScaleDownVer 350ms ease-out both';
          clearInterval(interval);
        }
      }, 100)
    }
    frontImg.src = frontImgq;
  }

  destroyCard = () => {
    const card = document.querySelector('.card');
    const interval = setInterval(() => {
      const theCSSprop = window.getComputedStyle(card, null)
        .getPropertyValue('opacity');

      if (theCSSprop === '0') {
        card.style.display = 'none';
        card.style.animation = '';
        this.setState({ img: this.state.bImg.src, pack: this.state.pack - 1,open: false });
        this.pullCard();
        clearInterval(interval);
      }
    }, 100)

    card.style.animation = 'destroyCard .5s linear both';
  }

  takeCard = () => {
    const card = document.querySelector('.card');
    const interval = setInterval(() => {
      const theCSSprop = window.getComputedStyle(card, null)
        .getPropertyValue('opacity');

      if (theCSSprop === '0') {
        card.style.animation = '';
        card.style.display = 'none';
        this.setState({ img: this.state.bImg.src, pack: this.state.pack - 1,open: false });
        this.pullCard();
        clearInterval(interval);
      }
    }, 100)
    
    card.style.animation = 'takeCard 250ms ease-in both';
  }

  render() {
    const { id, fetchedUser } = this.props;
    const cardData = {
      title: 'Гарри Поттер',
      collection: 'Лего',
      img,
      rang: 0,
    }

    return (
      <Panel id={id}>
        <PanelHeader>Боксы</PanelHeader>
        {fetchedUser &&
          <Group title="User Data Fetched with VK Connect">
            <Cell
              before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
              description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
            >
              {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
            </Cell>
          </Group>}
        <Group>
          <div>
            {
              (this.state.open && !this.state.rotate) 
              ? <div className="btn" onClick={this.destroyCard}>destroy</div>
              : '' 
            }
          </div>
          <div className="chest"/>
          <div className="stack"/>
          <div className="card" onClick={ this.state.open ? this.state.rotate ? () =>{} : this.takeCard : this.openCard}>
            <Stars />
            <div className="r-hex">
              <div className="r-hex-inner">
                <div className="r-hex-inner-next" >
                  <img className="img" src={this.state.img} />
                </div>
              </div>
            </div>
          </div>
          <Card data={cardData} />
        </Group>
      </Panel>
    );
  }
}

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
