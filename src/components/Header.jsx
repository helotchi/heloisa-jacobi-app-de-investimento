import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, balance } = this.props;
    return (
      <header>
        <div><h2 data-testid="email-field">{ email }</h2></div>

        <div><h2 data-testid="balance-field">{ balance.toFixed(2) }</h2></div>

        <div>
          <Link to="/draw" data-testid="link-to-draw"> Sacar </Link>
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
