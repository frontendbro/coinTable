const ReactDataGrid = require('react-data-grid');
//const exampleWrapper = require('../components/exampleWrapper');
const React = require('react');

export class Table extends React.Component {
  constructor(props, context) {
    super(props, context);
    //this.createRows();
    this._columns = [
      { key: 'id', name: 'Name' },
      { key: 'price', name: 'priceUsd' },
      { key: 'title', name: 'marketCapUsd' },
      { key: 'count', name: 'vwap24Hr' } ];

    this._rows = props.dataX;

  }

  render() {
    return  (
      <ReactDataGrid
        columns={this._columns}
        minHeight={500} />
    );
  }
}
