import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import UseMutation from '../UseMutation';
import { validateRequiredFields, validateEmail, validatePassword } from '../Validators'
import RoutingContext from '../routing/RoutingContext';
import Link from '../routing/Link';
import { toast } from 'react-toastify';

const { useCallback, useState, useContext } = React;

const SignInMutation = graphql`
  mutation SignUpActionSignUpMutation($input: SignUpMutationInput!) {
    signUp(input: $input) {
      user {
        id
        nick
        avatarUrl
      }
    }
  }
`;

export default function signUpAction() {
  const [nick, setNick] = useState({ name: 'nick', value: '', valid: true, validators: [validateRequiredFields] });
  const [email, setEmail] = useState({ name: 'email', value: '', valid: true, validators: [validateRequiredFields, validateEmail] });
  const [password, setPassword] = useState({ name: 'password', value: '', valid: true, validators: [validateRequiredFields, validatePassword] });
  const [passwordConfirmation, setPasswordConfirmation] = useState({ name: 'password', value: '', valid: true, validators: [validateRequiredFields] });
  const [validation, setValidation] = useState({ valid: true, message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [isSignUpPending, signUp] = UseMutation(SignInMutation);

  const router = useContext(RoutingContext);

  const onNickChange = useCallback(
    event => {
      const newState = nick;
      newState.value = event.target.value;
      setNick(newState);
    },
    [setNick],
  );

  const onEmailChange = useCallback(
    event => {
      const newState = email;
      newState.value = event.target.value;
      setEmail(newState);
    },
    [setEmail],
  );

  const onPasswordChange = useCallback(
    event => {
      const newState = password;
      newState.value = event.target.value;
      setPassword(newState);
    },
    [setPassword],
  );

  const onPasswordConfirmationChange = useCallback(
    event => {
      const newState = passwordConfirmation;
      newState.value = event.target.value;
      setPasswordConfirmation(newState);
    },
    [setPasswordConfirmation],
  );

  const runValidations = (validationState) => {
    const fieldsToValidate = ['nick', 'email', 'password', 'passwordConfirmation'];
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

  const passwordConfirmationValidation = (validationState) => {
    const newState = passwordConfirmation;
    const validation = passwordConfirmation.value === password.value;
    newState.valid = validation;

    if (!validation && !validationState.message) {
      validationState.valid = false;
      validationState.message = 'Hasła się nie zgadzają';
    }

    setPasswordConfirmation(newState);
  }
  
  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      setFormSubmitted(true);
      
      const validationState = { valid: true, message: '' }
      runValidations(validationState);
      passwordConfirmationValidation(validationState);
      setValidation(validationState);

      if(validationState.valid) {
        signUp({
          variables: {
            input: {
              nick: nick.value,
              email: email.value,
              password: password.value,
            },
          },
          updater: (store, response) => {
            const result = store.getRootField('signUp');
            if (result && result.getLinkedRecord('user')) {
              localStorage.setItem('signedIn', response.signUp.user.id);
              localStorage.setItem('signedIn', 'USER');
              window.open('/', '_self');
            } else {
              result.getLinkedRecord('errors').forEach((error) => {
                toast.error(error, {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: false,
                })
              })  
            }
          },
        });
      }
    },
    [setFormSubmitted, setValidation, nick, email, password]
  );

  const formComponents = () => (
    <div className="Auth-container">
      <div className="App-label-big">Rejestracja</div>
      <div className="Auth-form-body">
        <form action="" method="get" className="Auth-form" onSubmit={onSubmit}>
        <div className="Auth-form-field">
            <label>Nick</label>
            <input className={nick.valid ? '' : 'Input-invalid'} type="text" name="nick" id="user-nick" onChange={onNickChange}/>
          </div>
          <div className="Auth-form-field">
            <label>Email</label>
            <input className={email.valid ? '' : 'Input-invalid'} type="text" name="email" id="user-email" onChange={onEmailChange}/>
          </div>
          <div className="Auth-form-field">
            <label>Hasło</label>
            <input className={password.valid ? '' : 'Input-invalid'} type="password" name="password" id="user-password" onChange={onPasswordChange}/>
          </div>
          <div className="Auth-form-field">
            <label>Potwierdź Hasło</label>
            <input className={passwordConfirmation.valid ? '' : 'Input-invalid'} type="password" name="passwordConfirmation" id="user-password-confirmation" onChange={onPasswordConfirmationChange}/>
          </div>
          <div className="Auth-form-submit">
            <span className="Form-message-invalid">{validation.message}</span>
            <button type="submit">Zarejestruj</button>
          </div>
          <label>Lub</label>
          <Link to='/'>
            <div className="Auth-form-submit">
              <button type="submit">Zaloguj</button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );

  return formComponents();
}