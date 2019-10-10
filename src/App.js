import React from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
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
	componentDidMount() {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
			console.log(type);
		});
	};
	
	go = e => {
		this.setState({ activePanel: e.currentTarget.dataset.to });
	};
	
	render() {
		const { activePanel } = this.state;
		return (
			<View activePanel={activePanel}>
				<Home id='home'  go={this.go} />
			</View>
		);
	}
}

export default App;
