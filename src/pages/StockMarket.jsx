import React from "react";
import Header from "../components/Header";
import fetchStocks from "../services/fetchStocks";

class StockMarket extends React.Component {
  componentDidMount() {
    this.loadStocks();
  }

  loadStocks = async () => {
    return await fetchStocks();
  }
  
  render() {
    return (
      <Header />
    );
  }
}

export default StockMarket;