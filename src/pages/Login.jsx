import React from 'react';
import Input from '../components/Input';

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
        </form>
      </div>
    );
  }
}

export default Login;