import React from 'react';
import PropTypes from 'prop-types';
import { 
  Panel, 
  PanelHeader, 
  Group, 
  Cell, 
  Avatar 
} from '@vkontakte/vkui/';
import Card from '../components/Card';
import img from '../img/polygon.png';

class Home extends React.Component {

  render() {
    const { id, fetchedUser } = this.props;
    const cardData = {
      title: 'Гарри Поттер',
      collection: 'Лего',
      img,
      rang: 0,
    }

    return (
      <Panel id={id}>
        <PanelHeader>Боксы</PanelHeader>
        {fetchedUser &&
          <Group title="User Data Fetched with VK Connect">
            <Cell
              before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
              description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
            >
              {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
            </Cell>
          </Group>}
        <Group>
          <div className='scroller-container'>
            <Card data={cardData} />
          </div>
        </Group>
      </Panel>
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
