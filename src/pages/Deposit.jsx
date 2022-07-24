import React from "react";
import Input from '../components/Input';
import Button from '../components/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeBalance } from '../actions';

class Deposit extends React.Component {
  constructor() {
    super();
    this.state = {
      valueDeposit: 0,
    };
  }
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { valueDeposit } = this.state;
    const { balance, dispatch, history } = this.props;
    const newDeposit = parseFloat(balance) + parseFloat(valueDeposit);
    dispatch(changeBalance(newDeposit));
    history.push('/myStocks');
  }
  
  checkButton = () => {
    const { valueDeposit } = this.state;
    let isDisable = true;
    if (valueDeposit != 0) {
      isDisable = false;
    }
    return isDisable;
  }

  render() {
    const { valueDeposit } = this.state;
    const { balance } = this.props;
    return (
      <div>
        <div>Saldo disponível em conta <b>R$ { balance.toFixed(2) }</b></div>

        <form>
          <Input 
            label="Valor do Deposito"
            idFor="deposit"
            name="valueDeposit"
            type="number"
            id="deposit-input"
            value={ valueDeposit }
            onChange={ this.handleChange }
          />

          <Button 
            id="confirm-deposit"
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

Deposit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  balance: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  balance: user.balance,
});

export default connect(mapStateToProps, null)(Deposit);