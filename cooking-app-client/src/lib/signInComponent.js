import React from 'react';
import { Link } from 'react-router-dom';

class SignInComponent extends React.Component {
  handleSignIn = () => {
    localStorage.setItem('signedIn', true);
  }

  render() {
    return (
      <div className="Auth-container">
        <div className="App-label-big">Logowanie</div>
        <form className="Auth-form-body" onSubmit={this.handleSignIn}>
          <div method="get" className="Auth-form">
            <div className="Auth-form-field">
              <label>Email lub nick</label>
              <input type="text" name="user-identifier" id="user-identifier"/>
            </div>
            <div className="Auth-form-field">
              <label>Hasło</label>
              <input type="password" name="user-password" id="user-password"/>
            </div>
            <div className="Auth-form-submit">
              <button onClick={this.handleSignIn}>Zaloguj</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInComponent;