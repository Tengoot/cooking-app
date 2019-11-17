import React from 'react';
import { Redirect } from 'react-router-dom'
import { withValidators } from '../HOC/withValidators';

class SignInComponent extends React.Component {
  state = {
    login: {
      name: 'login',
      value: '',
      valid: true,
      validators: [this.props.validateRequiredFields],
    },
    password: {
      name: 'password',
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
    this.setState({ validation: validationState })
    if (this.state.validation.valid) {
      localStorage.setItem('signedIn', true);
    } 
  }

  runValidations = (validationState) => {
    const fieldsToValidate = ['login', 'password'];
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

  validateRequiredFields = () => {
    const validationState = this.state.validation;
    [this.state.login, this.state.password].forEach((fieldState) => {
      const value = fieldState.value;
      const newState = fieldState;
      const validation = (value || value === '') && (value.length > 0);

      newState.valid = validation;
      
      if (!validation && !validationState.message) {
        validationState.valid = false;
        validationState.message = 'Zły login lub hasło';
      }

      this.setState({ [fieldState.name]: newState, validation: validationState });
    });
  };

  handleChange = (event) => {
    const node = event.target;
    const newState = this.state[node.name]
    
    newState.value = node.value
    this.setState({ [node.name]: newState })
  }

  formComponents = () => (
    <div className="Auth-container">
      <div className="App-label-big">Logowanie</div>
      <form className="Auth-form-body" onSubmit={this.handleSubmit}>
        <div className="Auth-form">
          <div className="Auth-form-field">
            <label>Email lub nick</label>
            <input className={this.state.login.valid ? '' : 'Input-invalid'} type="text" name="login" id="user-identifier" onChange={this.handleChange} />
          </div>
          <div className="Auth-form-field">
            <label>Hasło</label>
            <input className={this.state.password.valid ? '' : 'Input-invalid'} type="password" name="password" id="user-password" onChange={this.handleChange}/>
          </div>
          <span className="Form-message-invalid">{this.state.validation.message}</span>
          <div className="Auth-form-submit">
            <button>Zaloguj</button>
          </div>
        </div>
      </form>
    </div>
  );

  redirect() {
    return(<Redirect to="/recipes/" />);
  }

  render() {
    return this.state.formSubmitted && this.state.validation.valid ? this.redirect() : this.formComponents();
  }
}

export default withValidators(SignInComponent);