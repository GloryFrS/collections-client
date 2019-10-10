import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Card from '../components/Card.jsx';
import img from '../img/Polygon.png'

class Home extends React.Component {
	render() {
		const { id, fetchedUser } = this.props;
		const cardData = {
			title: 'Легендарный Гарри Поттер',
			collection: 'Лего',
			img,
			rang: 2
		} 
		return ( 
			<Panel id={id}>
				<PanelHeader>Боксы</PanelHeader>
				{fetchedUser &&
				<Group title="User Data Fetched with VK Connect">
					<Cell
						before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
					>
						{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
					</Cell>
				</Group>}
		
				<Group>
					<Card data={cardData}/>
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
