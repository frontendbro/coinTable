import React from 'react';
import './index.css';
//import PropTypes from 'prop-types';

export default function MyTable(props) {
  return(
    <table className="myTable">
        <thead>
        <tr>
          <th>Name</th>
          <th>priceUsd</th>
          <th>marketCapUsd</th>
          <th>vwap24Hr</th>
        </tr>
        </thead>
        <tbody>
          {props.data.map( item =>
              <tr>
              <th>{item.name}</th>
              <th>{item.priceUsd}</th>
              <th>{item.marketCapUsd}</th>
              <th>{item.vwap24Hr}</th>
              </tr>
            )
          }
        </tbody>
    </table>
  )
}
