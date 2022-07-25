import React from "react";
import Input from '../components/Input';
import Button from '../components/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchStocks from "../services/fetchStocks";
import { changeBalance } from '../actions';

class BuyStock extends React.Component {
  constructor() {
    super();
    this.state = {
      stock: {},
      quantity: 0,
      menssage: '',
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { stockId } = match.params;
    this.stockMarket(stockId);
  }

  stockMarket = async (stockId) => {
    const stock = await fetchStocks();
    const stockObj = stock.filter(({ id }) => id === stockId);
    this.setState({ stock: stockObj[0] });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.validValueStock());
  }

  handleClick = () => {
    const { valueStock } = this.state;
    const { balance, dispatch, history } = this.props;
    const newDraw = parseFloat(balance) - parseFloat(valueStock);
    dispatch(changeBalance(newDraw));
    history.push('/myStocks');
  }
  
  checkButton = () => {
    const { stock, valueStock } = this.state;
    const { balance } = this.props;
    let isDisable = true;
    if (valueStock != 0 && valueStock <= balance && valueStock >= stock.value) {
      isDisable = false;
    }
    return isDisable;
  }

  validValueStock = () => {
    const { stock, valueStock } = this.state;
    const { balance } = this.props;
    if (valueStock != 0 && valueStock <= balance && valueStock >= stock.value) {
      this.setState({ quantity: parseFloat(valueStock) / parseFloat(stock.value), 
      menssage: '',});
    }
    this.setState({ menssage: 'Valor inválido para compra!' });
  }

  render() {
    const { stock, valueStock, quantity, menssage } = this.state;
    const { balance } = this.props;
    return (
      <div>
        <div>
          <div>
            <div>
              Imagem
            </div>
            <div>
              <div>{ stock.name }</div>
              <p>{ stock.id }</p>
            </div>
          </div>
          <div>
            { stock.value }
          </div>
        </div>

        <div>Saldo disponível em conta <b>R$ { balance.toFixed(2) }</b></div>

        <form>
          <Input 
            label="Valor"
            idFor="value"
            name="valueStock"
            type="number"
            id="value-stock"
            value={ valueStock }
            onChange={ this.handleChange }
          />
          
          { menssage.length > 0
            ? <p>
              { menssage }
            </p>
            : <p>
              Estimativa de compra: {quantity} BDR
            </p>
          } 

          <Button 
            id="confirm-draw"
            label="Confirmar"
            name="confirmButton"
            type="button"
            disabled={ this.checkButton() }
            onClick={ this.handleClick }
          />
        </form>
      </div>
    );
  }
}

BuyStock.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  balance: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object,
};

const mapStateToProps = ({ user }) => ({
  balance: user.balance,
});

export default connect(mapStateToProps, null)(BuyStock);