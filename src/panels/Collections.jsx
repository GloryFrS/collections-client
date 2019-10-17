import React, { Component } from 'react';
import { 
  Panel, 
  View, 
  PanelHeader, 
  Group,
  Header,
  HorizontalScroll
} from '@vkontakte/vkui/';
import img from '../img/polygon.png';
import './Collections.scss';

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'collections',
      data: [
        {
          title: 'Гарри Поттер',
          collection: 'Лего',
          img,
          rang: 2,
          packSize: 0
        },
        {
          title: 'Lego boy',
          collection: 'Лего',
          img,
          rang: 0,
          packSize: 0
        }
      ]
    }
  }

  render() {
    const { data } = this.state;
    const { id } = this.props;
    const items = data.map((item) =>
      <div className='collection-item'>
        Элджей
        <img src={item.img} alt=''/>
      </div>
    )

    return (
      <View activePanel={this.state.activePanel}>
        <Panel id={id}>
          <PanelHeader >Коллекции</PanelHeader>
          <Group >
            <Header level="secondary"  aside={'Показать все'}>Коллекции "Lego"</Header>
            <HorizontalScroll>
              <div className='collection-container'>
                {items}
              </div>
            </HorizontalScroll>
          </Group>
        </Panel>  
        <Panel id='box-list'>
          <PanelHeader>asd</PanelHeader>
        </Panel>
      </View>
    );
  }
}

export default Collections;
