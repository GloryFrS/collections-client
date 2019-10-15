import React from 'react';
import PropTypes from 'prop-types';
import { Panel, View, PanelHeader, Group, Cell, Avatar, Button, PanelHeaderBack } from '@vkontakte/vkui/';
import Card from '../components/Card';
import coinIco from '../img/coin.png';
import img from '../img/polygon.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'box2'
    }
  }

  render() {
    const { id, fetchedUser } = this.props;
    const cardData = {
      title: 'Гарри Поттер',
      collection: 'Лего',
      img,
      rang: 0,
    }

    return (
      <View activePanel={this.state.activePanel}>
        <Panel id={id}>
          <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'box2' })} />}>Боксы</PanelHeader>
          <Group>
            <div className='scroller-container'>
              <Card data={cardData} />
              
            </div>
          </Group>
        </Panel>  
        <Panel id='box2'>
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
            
            <Button  level="commerce" size="xl" onClick={() => this.setState({ activePanel: 'box' })}/>asd<Button/>
            
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
