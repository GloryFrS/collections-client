import React from 'react';
import Stars from '../../components/items/Stars';
import { PanelHeader, HeaderButton } from '@vkontakte/vkui/';
import { Button, Div } from '@vkontakte/vkui/';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import legendBack from '../../img/b-rang-legend.png';
import rareBack from '../../img/b-rang-simple.png';
import basicBack from '../../img/b-rang-basic.png';
import coinIco from '../../img/coin.png';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

class OpenCards extends React.Component {
  
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
        this.props.go('full-collection');
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
        this.props.go('full-collection');
        clearInterval(interval);
      }
    }, 10)
    
    card.style.animation = 'takeCard 350ms ease-in both';
  }
  
  render () { 
    const { rang, title, img, collection } = this.props.data;
    const rangStars = rang === 2 ? <Stars/> : '';
    const rangTitle = ['Обычный', 'Эпичный', 'Легендарный'];
    const rangsTitle = ['rang-silver', 'rang-blue', 'rang-gold'];
    const rangColor = rangsTitle[rang];
    const rangsImgs = [basicBack, rareBack, legendBack];
    const rangsImgActiv = rangsImgs[rang];

    return(
      <>
        <PanelHeader
          left={<HeaderButton onClick={() => this.props.go('full-collection')}><Icon28ChevronBack  /></HeaderButton>}>
            Lego
        </PanelHeader>
        <div className='card-container' style={{ overflow: 'hidden'}}>
          <span className="card-points">x2</span>
          <div className="card">
            <img className='rang-background' src={rangsImgActiv} alt="" />
            <div className='r-hex'>
              <div className='r-hex-inner'>
                <div className='r-hex-inner-border'>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={`card-label ${rangColor}`}>
            <p>{`${rangTitle[rang]} ${title}`}</p>
            <p>Коллекция: {collection}</p>
            {rangStars}
          </div>
        </div>
        <Div>
          <Button className='btn' onClick={this.destroyCard} after={<img className='coin-ico' src={coinIco} alt=''/>} size='xl' level="destructive">Разбить дубликат и получить +30</Button>
          <Button className='btn' before={<Icon24Camera/>} size="xl">Поделиться в истории</Button>
          <Button className='btn' onClick={this.takeCard} size="xl">Подарить другу</Button>
        </Div>  
      </>
    )
  }
}

export default OpenCards;
