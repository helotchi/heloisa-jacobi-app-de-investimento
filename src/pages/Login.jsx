import React from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPassword: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/myStocks');
  }

  render() {
    const { userEmail, userPassword } = this.state;
    return (
      <div>
        <form>
          <Input 
            label="Email"
            idFor="email"
            name="userEmail"
            type="email"
            id="email-input"
            value={ userEmail }
            onChange={ this.handleChange }
          />

          <Input 
            label="Senha"
            idFor="password"
            name="userPassword"
            type="password"
            id="password-input"
            value={ userPassword }
            onChange={ this.handleChange }
          />

          <Button 
            id="login-button"
            label="Entrar"
            name="loginButton"
            type="button"
            disabled={ false }
            onClick={ this.handleClick }
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;