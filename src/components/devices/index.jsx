import React        from 'react';
import PropTypes    from 'prop-types';

import Device from '../device-card';
import './styles.css';
const axios = require('axios');


class Devices extends React.Component {
	constructor(){
		super();
		this.state = {
			isLoading: false,
			devices: []
		}
	}
	componentDidMount(){
		this.setState({isLoading: true});
		axios.get('/api/devices.json').then(({data}) => {
			this.setState({
				isLoading: false,
				devices: data
			});
		})
	}
	renderLoading() {
		const { isLoading } = this.state;
		if (isLoading) {
			return <h1>Loading devices....</h1>;
		}
	}
	render() {
		const { devices } = this.state;
		console.log('devices', devices);
		return (
			<div className="widget">
				{this.renderLoading()}
				<h1>{this.props.title}</h1>
				{
					devices.length && devices.map(device => <Device device={device} />)
				}
			</div>

		);
	}
}

Devices.defaultProps = {
	title: 'Welcome',
};

Devices.propTypes = {
	title: PropTypes.string,
};

export default Devices;
