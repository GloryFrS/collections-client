import React from 'react';
import PropTypes from 'prop-types';
import { 
  Panel, 
  View, 
  PanelHeader, 
  Group, 
  Cell, 
  Avatar, 
  Button
} from '@vkontakte/vkui/';
import Card from '../components/Card';
import coinIco from '../img/coin.png';
import img from '../img/polygon.png';
import basicBox from '../img/basic-box.png';
import simpleBox from '../img/simple-box.png';
import legenBox from '../img/legend-box.png';
import './Boxes.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'box-list',
      chest: '',
      title: 'Гарри Поттер',
      collection: 'Лего',
      img,
      rang: 0,
      packSize: 0
    }
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen = (e, chest, packSize) => {
    e.preventDefault();
    this.setState({ 
      activePanel: 'box',
      chest,
      packSize 
    });
  }

  go = (id) => {
    this.setState({ activePanel: id });
  }

  render() {
    const { id, fetchedUser } = this.props;
    const cardData = this.state;

    return (
      <View activePanel={this.state.activePanel}>
        <Panel id={id}>
          <PanelHeader >Боксы</PanelHeader>
          
            <div className='scroller-container'>
              <Card data={cardData} go={this.go} />
            </div>
          
        </Panel>  
        <Panel id='box-list'>
          <PanelHeader>Боксы</PanelHeader>
          {fetchedUser &&
            <Group>
              <Cell
                before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
                asideContent={ <Button size="l" level="commerce">Купить монеты</Button>}
              >
                <div className='cash-coints'>
                  {fetchedUser.first_name}
                  <p>40 <img src={coinIco} alt=''/> +1 (43:24)</p>
                </div>
              </Cell>
            </Group>}
          <Group>
            <div className='container-boxes'>
              <div className='container-boxes_img'>
                <img src={basicBox} alt=""/>
              </div>
              <div className='container-boxes_content'>
                <p className='boxes-title'>Обычный бокс</p>
                <p className='boxes-description'>Содержит случайную карточку</p>
                <Button onClick={e => this.handleOpen(e,basicBox,1)} size="l">Открыть за 10 <img src={coinIco} alt=''/> </Button>
              </div>
            </div>
          </Group>
          <Group>
            <div className='container-boxes'>
              <div className='container-boxes_img'>
                <img src={simpleBox} alt=""/>
              </div>
              <div className='container-boxes_content'>
                <p className='boxes-title'>Обычный бокс</p>
                <p className='boxes-description'>Содержит случайную карточку</p>
                <Button onClick={e => this.handleOpen(e,simpleBox,3)} size="l">Открыть за 30 <img src={coinIco} alt=''/> </Button>
              </div>
            </div>
          </Group>
          <Group>
            <div className='container-boxes'>
              <div className='container-boxes_img'>
                <img src={legenBox} alt=""/>
              </div>
              <div className='container-boxes_content'>
                <p className='boxes-title'>Обычный бокс</p>
                <p className='boxes-description'>Содержит случайную карточку</p>
                <Button onClick={e => this.handleOpen(e,legenBox,5)} size="l">Открыть за 50 <img src={coinIco} alt=''/> </Button>
              </div>
            </div>
          </Group>
        </Panel>
      </View>
    );
  }
}

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
