import PropTypes from 'prop-types';
import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import Button from "../components/Button";
import { connect } from 'react-redux';

class MyStocks extends React.Component {
  
  handleClick = () => {
    const { history } = this.props;
    history.push('/stockMarket');
  }

  render() {
    const { stocks } = this.props;
    return (
      <div>
        <Header />
        <div className="pt-10">
          <div>
            <h2>Minhas Ações</h2>
          </div>

          <div className="grid justify-items-center pt-5">
            { stocks.length > 0
              ? <Table stocks={ stocks } />
              : <p className='text-sm'>Você ainda não investiu em ações</p>
            }

            <Button 
              id="explore-button"
              label="Explorar mercado de ações"
              name="exploreButton"
              type="button"
              disabled={ false }
              onClick={ this.handleClick }
            />
          </div>
        </div>
      </div>
    );
  }
}

MyStocks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  stocks: PropTypes.arrayOf(PropTypes.object),
};

MyStocks.defaultProps = {
  stocks: () => [],
};

const mapStateToProps = ({ user }) => ({
  stocks: user.investedStocks,
});

export default connect(mapStateToProps, null)(MyStocks);
