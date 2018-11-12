import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from "../components/Table";
import { Example } from "../components/Example";

import { getData } from '../actions/PageActions';

import './App.css';

class App extends Component {
	render() {
		const { dataX, onGetData } = this.props;
		onGetData();
		console.log("Данные", `${dataX}`);
		return (
			<div className="App">
				{/* <Table data={data}/> */}
				<Example data={dataX}/>
			</div>
		)
	}
}

/* Приклеиваем данные из store */
const mapStateToProps = store => {
	console.log(store);
	return {
		dataX: store.data
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