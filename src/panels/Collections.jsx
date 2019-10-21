import React, { Component } from 'react';
import { 
  Panel, 
  View, 
  PanelHeader, 
  Group,
  Header,
  HorizontalScroll,
  HeaderButton,
  Div
} from '@vkontakte/vkui/';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import CardItem from '../components/items/CardItem';
import img from '../img/polygon.png';
import img2 from '../img/polygon2.png';

import './Collections.scss';

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'full-collection',
      data: [
        {
          title: 'Гарри Поттер',
          collection: 'Лего',
          img,
          rang: 2
        },
        {
          title: 'Lego boy',
          collection: 'Лего',
          img: img2,
          rang: 0
        },
        {
          title: 'Гарри Поттер',
          collection: 'Лего',
          img,
          rang: 2
        },
        {
          title: 'Lego boy',
          collection: 'Лего',
          img: img2,
          rang: 0
        },
        {
          title: 'Гарри Поттер',
          collection: 'Лего',
          img,
          rang: 2
        },
        {
          title: 'Lego boy',
          collection: 'Лего',
          img: img2,
          rang: 0
        }
      ]
    }
  }
  go = () => {
    this.setState({ activePanel: 'open-card' });
  }

  render() {
    const { data } = this.state;
    const { id } = this.props;
    const items = data.map((item, index) => (
      <CardItem go={this.go} key={index} rang={item.rang} title={item.title} img={item.img}/>
    ));

    return (
      <View id='collections' activePanel={this.state.activePanel}>
        <Panel id={id}>
          <PanelHeader >Коллекции</PanelHeader>
          <Group >
            <Header level="secondary"  aside={<span className='show-btn' onClick={() => this.setState({ activePanel: 'full-collection' })}>Показать все</span>}>
              <div className='collection-title'>Коллекции "Lego"</div>  
            </Header>
            <div className='in-collection-counter'>8/12</div>
            <HorizontalScroll>
              <div className='collection-container'>
                {items}
              </div>
            </HorizontalScroll>
          </Group>
          <Group >
            <Header level="secondary"  aside={<span className='show-btn'>Показать все</span>}>
              <div className='collection-title'>Коллекции "Lego"</div>  
            </Header>
            <div className='in-collection-counter'>8/12</div>
            <HorizontalScroll>
              <div className='collection-container'>
                {items}
              </div>
            </HorizontalScroll>
          </Group>
          <Group >
            <Header level="secondary"  aside={<span className='show-btn'>Показать все</span>}>
              <div className='collection-title'>Коллекции "Lego"</div>  
            </Header>
            <div className='in-collection-counter'>8/12</div>
            <HorizontalScroll>
              <div className='collection-container'>
                {items}
              </div>
            </HorizontalScroll>
          </Group>
        </Panel>  

        <Panel id='full-collection'>
          <PanelHeader 
            left={<HeaderButton onClick={() => this.setState({ activePanel: 'collections' })}><Icon28ChevronBack  /></HeaderButton>}>
              Lego
          </PanelHeader>
            <Div>
              <Header level="secondary"  aside={<span>8/12</span>}>
                <div className='collection-title'>Коллекции "Lego"</div>  
              </Header>
              <div className='collections-list'>
                {items}
              </div>
            </Div>
        </Panel>
        <Panel id='open-card'>
          <PanelHeader
            left={<HeaderButton onClick={() => this.setState({ activePanel: 'full-collection' })}><Icon28ChevronBack  /></HeaderButton>}>
              Lego
          </PanelHeader>
            <Div>
              <Header level="secondary"  aside={<span>8/12</span>}>
                <div className='collection-title'>Коллекции "Lego"</div>  
              </Header>
            </Div>
          </Panel>
      </View>
    );
  }
}

export default Collections;
