import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignUpComponent extends React.Component {
  handleSignIn = () => {
    localStorage.setItem('signedIn', true);
  }

  render() {
    return (
      <div className="Auth-container">
        <div className="App-label-big">Rejestracja</div>
        <div className="Auth-form-body">
          <form action="" method="get" className="Auth-form" onSubmit={this.handleSignIn}>
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
              <input type="password" name="password-confirmation" id="user-password-confirmation" />
            </div>
            <div className="Auth-form-submit" onClick={this.handleSignIn}>
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
  }
}

export default SignUpComponent;