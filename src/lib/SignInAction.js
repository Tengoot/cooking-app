import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import UseMutation from '../UseMutation';
import { validateRequiredFields } from '../Validators'
import RoutingContext from '../routing/RoutingContext'

const { useCallback, useState, useContext } = React;

const SignInMutation = graphql`
  mutation SignInActionSignInMutation($input: SignInMutationInput!) {
    signIn(input: $input) {
      user {
        id
        nick
        avatarUrl
      }
    }
  }
`;

export default function signInAction() {
  const [login, setLogin] = useState({ name: 'login', value: '', valid: true, validators: [validateRequiredFields] });
  const [password, setPassword] = useState({ name: 'password', value: '', valid: true, validators: [validateRequiredFields] });
  const [validation, setValidation] = useState({ valid: true, message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [isSignInPending, signIn] = UseMutation(SignInMutation);

  const router = useContext(RoutingContext);

  const onLoginChange = useCallback(
    event => {
      const newState = login;
      newState.value = event.target.value;
      setLogin(newState);
    },
    [setLogin],
  );

  const onPasswordChange = useCallback(
    event => {
      const newState = password;
      newState.value = event.target.value;
      setPassword(newState);
    },
    [setPassword],
  );

  const runValidations = (validationState) => {
    const fieldsToValidate = ['login', 'password'];
    fieldsToValidate.forEach((fieldName) => {
      const fieldState = eval(fieldName);
      let valid = true;
      fieldState.validators.forEach((validator) => {
        if (valid) {
          const newState = validator(validationState, fieldState);

          if (!newState.valid) {
            valid = false;
            eval('set' + fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + '(newState)');
          }
        }
      });
    });
  };

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      setFormSubmitted(true);
      
      const validationState = { valid: true, message: '' }
      runValidations(validationState);
      setValidation(validationState);

      if(validationState.valid) {
        signIn({
          variables: {
            input: {
              nick: login.value,
              password: password.value,
            },
          },
          updater: store => {
            router.history.push('/');
          },
        });
      }
    },
    [setFormSubmitted, setValidation, login, password]
  );

  const formComponents = () => (
    <div className="Auth-container">
      <div className="App-label-big">Logowanie</div>
      <form className="Auth-form-body" onSubmit={onSubmit}>
        <div className="Auth-form">
          <div className="Auth-form-field">
            <label>Email lub nick</label>
            <input className={login.valid ? '' : 'Input-invalid'} type="text" name="login" id="user-identifier" onChange={onLoginChange} />
          </div>
          <div className="Auth-form-field">
            <label>Hasło</label>
            <input className={password.valid ? '' : 'Input-invalid'} type="password" name="password" id="user-password" onChange={onPasswordChange}/>
          </div>
          <span className="Form-message-invalid">{validation.message}</span>
          <div className="Auth-form-submit">
            <button>Zaloguj</button>
          </div>
        </div>
      </form>
    </div>
  )

  return formComponents();
}