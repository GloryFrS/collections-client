import React from 'react';
import { View, TabbarItem, Tabbar, Panel, PanelHeader, Epic } from '@vkontakte/vkui/';
import boxIco from './img/box-ico.png';
import collectionIco from './img/collection-ico.png';
import ratingIco from './img/rating-ico.png';
import Home from './panels/Home';
import '@vkontakte/vkui/dist/vkui.css';
import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStory: 'box'
    };
    this.onStoryChange = this.onStoryChange.bind(this);
  }
  
  onStoryChange = e => {
    this.setState({ 
      activeStory: e.currentTarget.dataset.story 
    })
  }


  render() {
    const { activeStory } = this.state;

    return ( 
      <Epic activeStory={activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={activeStory === 'box'}
            data-story="box"
            text="Боксы"
          ><img src={boxIco} alt=''/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'rating'}
            data-story="rating"
            text="Рейтинг"
          ><img src={collectionIco} alt=''/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={activeStory === 'collections'}
            data-story="collections"
            text="Коллекции"
          ><img src={ratingIco} alt=''/></TabbarItem>
        </Tabbar>
      }>
        <View id="box" activePanel="box">
          <Home id='box' go={this.onStoryChange}/>
        </View>
        <View id="rating" activePanel="rating">
          <Panel id="rating">
            <PanelHeader>Рейтинг</PanelHeader>
          </Panel>
        </View>
        <View id="collections" activePanel="collections">
          <Panel id="collections">
            <PanelHeader>Коллекции</PanelHeader>
          </Panel>
        </View>
      </Epic>
      
    );
  }
}

export default App;
