import logo from '../assets/logo.svg';
import React from 'react';

class Header extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', () => {
      setInterval(() => { 
        let scrollPosition = Math.round(window.scrollY);
        if (scrollPosition > 100){
          document.getElementById('top-header').classList.add('App-fixed-header');
        } else {
          document.getElementById('top-header').classList.remove('App-fixed-header');
        }
    }, 300);
    });
  }

  render() {
    return (
      <div id='top-header' className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">
            <span>Książka</span>
            <span>Kucharska</span>
          </div>
        </div>
        <nav className="Auth-header-buttons">
          <div id="sign-in-button" className="Auth-button">
            <button><span>Zaloguj</span></button>
          </div>
          <div id="sign-up-button" className="Auth-button">
            <button><span>Dołącz teraz</span></button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;