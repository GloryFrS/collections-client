import React from 'react';
import {
  PanelHeader, 
  Group,
  Header,
  HorizontalScroll
} from '@vkontakte/vkui/';

const CollectionsList = (props) => (
    <>
      <PanelHeader >Коллекции</PanelHeader>
      <Group >
        <Header level="secondary"  aside={<span className='show-btn' onClick={() => props.go('full-collection')}>Показать все</span>}>
          <div className='collection-title'>Коллекции "Lego"</div>  
        </Header>
        <div className='in-collection-counter'>8/12</div>
        <HorizontalScroll>
          <div className='collection-container'>
            {props.items}
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
            {props.items}
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
            {props.items}
          </div>
        </HorizontalScroll>
      </Group>
    </>
  );
 
export default CollectionsList;
