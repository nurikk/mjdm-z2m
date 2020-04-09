import React        from 'react';
import PropTypes    from 'prop-types';
import './styles.css';

class DeviceCard extends React.PureComponent {
	render() {
		const { device } = this.props;
		return (
			<div className="device">
				{device.name}
			</div>
		);
	}
}

DeviceCard.defaultProps = {
	device: {}
};

DeviceCard.propTypes = {
	device: PropTypes.shape({
		name: PropTypes.string.isRequired
	}).isRequired,
};

export default DeviceCard;
