import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignUpComponent extends React.Component {
  state = {
    nick: {
      name: 'nick',
      value: '',
      valid: true,
    },
    email: {
      name: 'email',
      value: '',
      valid: true,
    },
    password: {
      name: 'password',
      value: '',
      valid: true,
    },
    passwordConfirmation: {
      name: 'passwordConfirmation',
      value: '',
      valid: true,
    },
    validation: {
      valid: true,
      message: '',
    },
    formSubmitted: false,
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ formSubmitted: true })

    const validationState = { valid: true, message: '' };

    this.validateRequiredFields(validationState);
    this.passwordFieldValid(validationState);
    this.emailValidation(validationState);
    this.passwordConfirmationValidation(validationState);
    this.setState({ validation: validationState })

    if (validationState.valid) {
      localStorage.setItem('signedIn', true);
    } 
  }

  validateRequiredFields = (validationState) => {
    [this.state.nick, this.state.email,
     this.state.password, this.state.passwordConfirmation].forEach((fieldState) => {
      const value = fieldState.value;
      const newState = fieldState;
      const validation = (value || value === '') && (value.length > 0);

      newState.valid = validation;
      
      if (!validation && !validationState.message) {
        validationState.valid = false;
        validationState.message = 'Złe wartości pól';
      }

      this.setState({ [fieldState.name]: newState });
    });
  };

  passwordFieldValid = (validationState) => {
    const newState = this.state.password;
    const password = newState.value;
    const strengthRequirements = [/[a-z]/, /[A-Z]/, /\d/, /\W/];
    const weak = strengthRequirements.map((regex) => regex.test(password)).includes(false);
    const validation = password.length >= 8 && !weak;

    newState.valid = validation;

    if (!validation && !validationState.message) {
      validationState.valid = false;
      validationState.message = 'Za słabe hasło';
    }

    this.setState({ password: newState });
  }

  emailValidation = (validationState) => {
    const newState = this.state.email;
    const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email.value);
    newState.valid = validation;
    if (!validation && !validationState.message) {
      validationState.valid = false;
      validationState.message = 'Zły email';
    }

    this.setState({ email: newState });
  }

  passwordConfirmationValidation = (validationState) => {
    const newState = this.state.passwordConfirmation;
    const validation = this.state.passwordConfirmation.value === this.state.password.value;
    newState.valid = validation;
    if (!validation && !validationState.message) {
      validationState.valid = false;
      validationState.message = 'Hasła się nie zgadzają';
    }

    this.setState({ passwordConfirmation: newState });
  }

  handleChange = (event) => {
    const node = event.target;
    const newState = this.state[node.name]

    newState.value = node.value
    this.setState({ [node.name]: newState })
  }

  formComponents = () => (
    <div className="Auth-container">
      <div className="App-label-big">Rejestracja</div>
      <div className="Auth-form-body">
        <form action="" method="get" className="Auth-form" onSubmit={this.handleSubmit}>
        <div className="Auth-form-field">
            <label>Nick</label>
            <input className={this.state.nick.valid ? '' : 'Input-invalid'} type="text" name="nick" id="user-nick" onChange={this.handleChange}/>
          </div>
          <div className="Auth-form-field">
            <label>Email</label>
            <input className={this.state.email.valid ? '' : 'Input-invalid'} type="text" name="email" id="user-email" onChange={this.handleChange}/>
          </div>
          <div className="Auth-form-field">
            <label>Hasło</label>
            <input className={this.state.password.valid ? '' : 'Input-invalid'} type="password" name="password" id="user-password" onChange={this.handleChange}/>
          </div>
          <div className="Auth-form-field">
            <label>Potwierdź Hasło</label>
            <input className={this.state.passwordConfirmation.valid ? '' : 'Input-invalid'} type="password" name="passwordConfirmation" id="user-password-confirmation" onChange={this.handleChange}/>
          </div>
          <div className="Auth-form-submit">
            <span className="Form-message-invalid">{this.state.validation.message}</span>
            <button type="submit">Zarejestruj</button>
          </div>
          <label>Lub</label>
          <Link className="Anchor-unstyled" to="/sign-in">
            <div className="Auth-form-submit">
              <button type="submit">Zaloguj</button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );

  redirect() {
    return(<Redirect to="/recipes/" />);
  }

  render() {
    return this.state.formSubmitted && this.state.validation.valid ? this.redirect() : this.formComponents();
  }
}

export default SignUpComponent;