import React from 'react';
import { Link } from 'react-router-dom';

class SignUpComponent extends React.Component {
  render() {
    return (
      <div className="Auth-container">
        <div className="App-label-big">Rejestracja</div>
        <div className="Auth-form-body">
          <form action="" method="get" className="Auth-form">
          <div className="Auth-form-field">
              <label>Nick</label>
              <input type="text" name="nick" id="user-nick"/>
            </div>
            <div className="Auth-form-field">
              <label>Email</label>
              <input type="text" name="email" id="user-email"/>
            </div>
            <div className="Auth-form-field">
              <label>Hasło</label>
              <input type="password" name="password" id="user-password"/>
            </div>
            <div className="Auth-form-field">
              <label>Potwierdź Hasło</label>
              <input type="password" name="password-confirmation" id="user-password-confirmation" required />
            </div>
            <div className="Auth-form-submit">
              <input type="submit" value="Zarejestruj"/>
            </div>
            <label>Lub</label>
            <div className="Auth-form-submit">
              <input type="submit" value="Zaloguj"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpComponent;