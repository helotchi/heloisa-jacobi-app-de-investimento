import React from "react";
import PropTypes from 'prop-types';
import Header from "../components/Header";
import fetchStocks from "../services/fetchStocks";
import Table from "../components/Table";
import { connect } from 'react-redux';
import { loadStocks } from '../actions';

class StockMarket extends React.Component {
  componentDidMount() {
    this.stockMarket();
  }

  stockMarket = async () => {
    const { dispatch } = this.props;
    const stocks = await fetchStocks();
    dispatch(loadStocks(stocks));
  }
  
  render() {
    return (
      <div>
        <Header />
        <Table />
      </div>
    );
  }
}

StockMarket.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(StockMarket);
