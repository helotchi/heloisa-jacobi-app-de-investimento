import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, balance } = this.props;
    return (
      <header className='grid grid-cols-1 divide-y divide-middle shadow-xl p-5 rounded-xl'>
        <div className='text-center pb-3'>
          <h2 data-testid="email-field">Olá, { email }</h2>
        </div>

        <div className='flex flex-row items-center space-x-3 pt-3'>
          <div className='justify-self-start'>
            <h2 data-testid="balance-field">Saldo</h2>
            <h2 data-testid="balance-value">R$ { balance.toFixed(2) }</h2>
          </div>

          <div>
            <Link 
              to="/draw"
              data-testid="link-to-draw"
              className='cursor-pointer uppercase text-center hover:text-alice hover:bg-lavender p-3 rounded-md bg-mauve'> 
              Sacar
            </Link>
          </div>

          <div>
            <Link 
              to="/deposit" 
              data-testid="link-to-deposit"
              className='cursor-pointer uppercase text-center hover:text-alice hover:bg-lavender p-3 rounded-md bg-mauve'> 
              Depositar
            </Link>
          </div>
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
