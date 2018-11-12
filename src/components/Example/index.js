import React from 'react';
import PropTypes from 'prop-types';

export class Example extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<ul>
				{data.map(item => {
					return <li key={item.rank}>{item.name}</li>
				})}
			</ul>
		)
	}
}

// Example.propTypes = {
// 	name: PropTypes.string.isRequired,
// }