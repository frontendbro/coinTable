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

    this._rows = props.data;

    console.log(props);
  }
  
  // createRows = () => {
  //   let rows = [];
  //   for (let i = 1; i < 1000; i++) {
  //     rows.push({
  //       id: i,
  //       title: 'Title ' + i,
  //       count: i * 1000
  //     });
  //   }

  //   this._rows = rows;
  // };

  rowGetter = (i) => {
    return this._rows[i];
  };

  render() {
    return  (
      <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        //rowsCount={this._rows.length}
        minHeight={500} />
    );
  }
}

// module.exports = exampleWrapper({
//   WrappedComponent: Table,
//   exampleName: "Basic Example",
//   exampleDescription: "A display only grid.",
//   examplePath: "./scripts/example01-basic.js",
//   examplePlaygroundLink: "https://jsfiddle.net/f6mbnb8z/1/"
// });