import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withValidators } from '../HOC/withValidators';

class SignUpComponent extends React.Component {
  state = {
    nick: {
      name: 'nick',
      value: '',
      valid: true,
      validators: [this.props.validateRequiredFields],
    },
    email: {
      name: 'email',
      value: '',
      valid: true,
      validators: [this.props.validateRequiredFields, this.props.validateEmail],
    },
    password: {
      name: 'password',
      value: '',
      valid: true,
      validators: [this.props.validateRequiredFields, this.props.validatePassword],
    },
    passwordConfirmation: {
      name: 'passwordConfirmation',
      value: '',
      valid: true,
      validators: [this.props.validateRequiredFields],
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

    this.runValidations(validationState);
    this.passwordConfirmationValidation(validationState);
    this.setState({ validation: validationState })
    
    if (validationState.valid) {
      localStorage.setItem('signedIn', true);
    } 
  }

  runValidations = (validationState) => {
    const fieldsToValidate = ['nick', 'email', 'password', 'passwordConfirmation'];
    fieldsToValidate.forEach((fieldName) => {
      const fieldState = this.state[fieldName];
      let valid = true;
      fieldState.validators.forEach((validator) => {
        if (valid) {
          const newState = validator(validationState, fieldState);
          if (!newState.valid) {
            valid = false;
            this.setState({ [fieldState.name]: newState })
          }
        }
      });
    })
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

export default withValidators(SignUpComponent);