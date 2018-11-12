import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyTable from "../components/MyTable";


import { getData } from '../actions/PageActions';

import './App.css';

class App extends Component {


	componentDidMount() {
		this.props.onGetData()
	}

	render() {
		console.log(this.props.isFetching);
		return (
			this.props.isFetching
			?
				<div>{this.props.dataX}</div>
			:
				<div className="App">
					<MyTable data={this.props.dataX} />
				</div>
		)
	}
}

/* Приклеиваем данные из store */
const mapStateToProps = store => {
	return {
		dataX: store.page.data,
		isFetching: store.page.isFetching
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onGetData: () => dispatch(getData())
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
