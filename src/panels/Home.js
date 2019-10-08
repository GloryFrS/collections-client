import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import persik from "../img/persik.png"


const Home = ({ id, go, fetchedUser }) => {
	
	const t = (x,y,size,canvas) => {
		canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
		for (let side = 0; side < 7; side++) {	
			canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
		}

	}
	useEffect(() => {
		let canvas = document.querySelector('#canvas').getContext('2d'),side = 0,
		size = 100,
		x = 100,
		y = 100;


		let imageObj = new Image();
		imageObj.onload = function()
		{
			canvas.save();
			canvas.beginPath();
			t(100,100,100,canvas);
			canvas.clip();
			canvas.drawImage(imageObj, 0, 0);
		};

		imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
		
		canvas.beginPath();
		canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
		for (side; side < 7; side++) {
			canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
		}

		// canvas.fillStyle = "#fff";
		canvas.strokeStyle = "gold";
		canvas.lineWidth = "2"
		canvas.stroke();
		// canvas.fill();
		
	});

	return (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<canvas id="canvas" width="400" height="400"></canvas>
			</Div>
		</Group>
	</Panel>
)};

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
