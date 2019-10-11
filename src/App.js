import React from 'react';
import { View } from '@vkontakte/vkui/';
import Home from './panels/Home';
import '@vkontakte/vkui/dist/vkui.css';
import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'home'
    };
  }
  
  go = e => {
    this.setState({
      activePanel: e.currentTarget.dataset.to
    });
  };

  render() {
    const { activePanel } = this.state;

    return ( 
      <View activePanel = { activePanel } >
        <Home id = 'home' go = { this.go }/> 
      </View>
    );
  }
}

export default App;
