import React from "react";
import Header from "../components/Header";
import fetchStocks from "../services/fetchStocks";

class MyStocks extends React.Component {
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

export default MyStocks;
