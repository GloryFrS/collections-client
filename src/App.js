import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import './style/style.scss';
import Home from './panels/Home';

const App = () => {
  return (
    <View  activePanel={'home'}>
      <Home id='home' />
    </View>
  );
}

export default App;
