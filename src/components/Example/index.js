import React from 'react';
import PropTypes from 'prop-types';

export class Example extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<div>
				<p>Привет, {`${data}`}!</p>
			</div>
		)
	}
}

Example.propTypes = {
	name: PropTypes.string.isRequired,
}