import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';

class Header extends React.Component {
  render() {
    const { email, balance } = this.props;
    return (
      <header>
        <div><h2 data-testid="email-field">{ email }</h2></div>

        <div><h2 data-testid="balance-field">{ balance.toFixed(2) }</h2></div>

        <div>
          <Button 
            id="draw-button"
            label="Sacar"
            name="drawButton"
            type="button"
            disabled={ false }
            onClick={ this.handleClick }
          />

          <Button 
            id="deposit-button"
            label="Depositar"
            name="depositButton"
            type="button"
            disabled={ false }
            onClick={ this.handleClick }
          />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
  balance: user.balance,
});

export default connect(mapStateToProps, null)(Header);