import React from 'react';
import {
  PanelHeader,
  Header,
  HeaderButton,
  Div
} from '@vkontakte/vkui/';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

const FullCollection = (props) => {
  return ( 
    <>
      <PanelHeader 
        left={<HeaderButton onClick={() => props.go('collections')}><Icon28ChevronBack  /></HeaderButton>}>
          Lego
      </PanelHeader>
      <Div>
        <Header level="secondary"  aside={<span>8/12</span>}>
          <div className='collection-title'>Коллекции "Lego"</div>  
        </Header>
        <div className='collections-list'>
          {props.items}
        </div>
      </Div>
    </>
  );
}
 
export default FullCollection;

