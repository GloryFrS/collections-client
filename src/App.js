import React from 'react';
import { TabbarItem, Tabbar, Epic } from '@vkontakte/vkui/';
import boxIco from './img/box-ico.png';
import collectionIco from './img/collection-ico.png';
import Boxes from './tabs/Boxes';
import Collections from './tabs/Collections';
import '@vkontakte/vkui/dist/vkui.css';
import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStory: 'collections',
      fetchedUser: { 
          "id": 2314852, 
          "first_name": "Ирина", 
          "last_name": "Денежкина", 
          "sex": 1, 
          "city": { 
            "id": 2, 
            "title": "Санкт-Петербург" 
          }, 
          "country": { 
            "id": 1, 
            "title": "Россия" 
          }, 
          "bdate": "10.4.1990", 
          "photo_100": "https://pp.userapi.com/c836333/v836333553/5b138/2eWBOuj5A4g.jpg",
          "photo_200": "https://pp.userapi.com/c836333/v836333553/5b137/tEJNQNigU80.jpg",
          "timezone": 3 
        } 
    };
    this.onStoryChange = this.onStoryChange.bind(this);
  }
  
  onStoryChange = e => {
    this.setState({ 
      activeStory: e.currentTarget.dataset.story 
    })
  }

  render() {
    const { activeStory, fetchedUser } = this.state;

    return (
      <Epic activeStory={activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={activeStory === 'box'}
            data-story="box"
            text="Боксы"
          ><img src={boxIco} className='tabbar-ico' alt=''/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={activeStory === 'collections'}
            data-story="collections"
            text="Коллекции"
          ><img src={collectionIco} className='tabbar-ico' alt=''/></TabbarItem>
        </Tabbar>
      }>
        <Boxes id='box' fetchedUser={fetchedUser} go={this.onStoryChange}/>
        <Collections id={"collections"}/>
      </Epic>
      
    );
  }
}

export default App;
