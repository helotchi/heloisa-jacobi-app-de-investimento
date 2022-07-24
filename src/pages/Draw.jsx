import React from "react";
import Input from '../components/Input';
import Button from '../components/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeBalance } from '../actions';

class Draw extends React.Component {
  constructor() {
    super();
    this.state = {
      valueDraw: 0,
    };
  }
  
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { valueDraw } = this.state;
    const { balance, dispatch, history } = this.props;
    const newDraw = balance - valueDraw;
    dispatch(changeBalance(newDraw));
    history.push('/myStocks');
  }
  
  checkButton = () => {
    const { valueDraw } = this.state;
    const { balance } = this.props;
    console.log(valueDraw, balance);
    let isDisable = true;
    if (valueDraw != 0 && valueDraw <= balance) {
      isDisable = false;
    }
    return isDisable;
  }

  render() {
    const { valueDraw } = this.state;
    const { balance } = this.props;
    return (
      <div>
        <div>Saldo disponível em conta <b>R$ { balance.toFixed(2) }</b></div>

        <form>
          <Input 
            label="Valor do Saque"
            idFor="draw"
            name="valueDraw"
            type="number"
            id="draw-input"
            value={ valueDraw }
            onChange={ this.handleChange }
          />

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

Draw.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  balance: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  balance: user.balance,
});

export default connect(mapStateToProps, null)(Draw);