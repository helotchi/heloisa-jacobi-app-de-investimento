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
    const { stocks } = this.props;
    return (
      <div>
        <Header />
        
        <div className="grid justify-items-center pt-5">
          <Table stocks={ stocks } />
        </div>
      </div>
    );
  }
}

StockMarket.propTypes = {
  dispatch: PropTypes.func.isRequired,
  stocks: PropTypes.arrayOf(PropTypes.object),
};

StockMarket.defaultProps = {
  stocks: () => [],
};

const mapStateToProps = ({ stocks }) => ({
  stocks: stocks.stocks,
});

export default connect(mapStateToProps, null)(StockMarket);
