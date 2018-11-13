import React, {Component} from 'react';
import './index.css';

export default class MyTable extends Component {
  constructor(props){
    super(props);
    this.table = React.createRef();
  }
  componentDidMount() {
    const scrollWidth = this.table.current.offsetWidth - this.table.current.clientWidth;
    const withScroll = this.table.current.clientWidth + scrollWidth;
    console.log(withScroll);

    this.table.current.style.overflow = "hidden";
    this.table.current.style.width = `${withScroll}px`;
    this.table.current.addEventListener('mouseover', () => {
      this.table.current.style.overflowY = "scroll";
      this.table.current.style.width = `calc(100% - ${scrollWidth})`
    })
    this.table.current.addEventListener("mouseout", () => {
      this.table.current.style.overflowY = "hidden";
      this.table.current.style.width = withScroll;
    });
  } 
  render() {
    const {data} = this.props;
    return <table cellPadding='10' cellSpacing='0' className="myTable">
        <thead className="myTable-head">
          <tr>
            <th className="myTable-head__th">Название</th>
            <th className="myTable-head__th">Стоимость</th>
            <th className="myTable-head__th">Капитализация</th>
            <th className="myTable-head__th">Суточный объём</th>
          </tr>
        </thead>
        <tbody className="myTable-body" ref={this.table}>
          {data.map(item => <tr key={item.rank}>
              <td className="myTable-head__td">{item.name}</td>
              <td className="myTable-head__td">{item.priceUsd}</td>
              <td className="myTable-head__td">{item.marketCapUsd}</td>
              <td className="myTable-head__td">{item.vwap24Hr}</td>
            </tr>)}
        </tbody>
      </table>;
  }
  
}
