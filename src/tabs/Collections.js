import React, { Component } from 'react';
import { Panel, View } from '@vkontakte/vkui/';
import CardItem from '../components/items/CardItem';
import OpenCard from '../tabs/panels/OpenCard';
import FullCollection from './panels/FullCollection';
import CollectionsList from './panels/CollectionsList';
import img from '../img/polygon.png';
import img2 from '../img/polygon2.png';
import './Collections.scss';


class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'collections',
      activeCardOpen: '',
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
          rang: 1
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
    this.handleOpenCard = this.handleOpenCard.bind(this);
  }

  go = (activePanel) => { 
    this.setState({ activePanel }); 
  };

  handleOpenCard = (data) => {
    this.setState({ activeCardOpen: data, activePanel: 'open-card' });
  };

  render() {
    const { data, activeCardOpen } = this.state;
    const { id } = this.props;
    const items = data.map((item, index) => (
      <CardItem open={this.handleOpenCard} key={index} collection={item.collection} rang={item.rang} title={item.title} img={item.img}/>
    ));

    return (
      <View id='collections' activePanel={this.state.activePanel}>
        <Panel id={id}>
          <CollectionsList go={this.go} items={items}/>
        </Panel>  
        <Panel id='full-collection'>
          <FullCollection go={this.go} items={items}/>
        </Panel>
        <Panel id='open-card'>
          <OpenCard data={activeCardOpen} go={this.go}/>
        </Panel>
      </View>
    );
  }
}

export default Collections;
