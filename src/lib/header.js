import logo from '../assets/logo.svg';
import React from 'react';
import Link from '../routing/Link';
import SignOutAction from './SignOutAction';

class Header extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', () => {
      setInterval(() => { 
        let scrollPosition = Math.round(window.scrollY);
        const node = document.getElementById('top-header');
        if (!node) {
          return null;
        }
        if (scrollPosition > 100){
          node.classList.add('App-fixed-header');
        } else {
          node.classList.remove('App-fixed-header');
        }
    }, 300);
    });
  }

  authButtons = () => (
    <nav className="Auth-header-buttons">
        <Link to="/sign-in">
          <div id="sign-in-button" className="Auth-button">
            <button><span>Zaloguj</span></button>
          </div>
        </Link>
        <Link to="/sign-up">
          <div id="sign-up-button" className="Auth-button">
            <button><span>Dołącz teraz</span></button>
          </div>
        </Link>
      </nav>
  );

  userButtons = () => (
    <nav className="Auth-header-buttons">
        <Link to="/new-recipe">
          <div id="sign-in-button" className="Auth-button">
            <button><span>Utwórz przepis</span></button>
          </div>
        </Link>
        <nav role="navigation">
          <ul>
            <li>
              <img src={this.props.viewer.avatarUrl ? "http://localhost:3000" + this.props.viewer.avatarUrl : "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX30777075.jpg"} className='User-image-small' />
              <span><strong>{this.props.viewer.nick}</strong></span>
              <ul class="dropdown">
                <li>
                  <Link to="/shopping-lists/">
                    <div id="shopping-list-button" className="Auth-button">
                      <button><span>Listy zakupów</span></button>
                    </div>
                  </Link>
                </li>
                <li><SignOutAction /></li>
              </ul>
            </li>
          </ul>
        </nav>
      </nav>
  );

  render() {
    return (
      <div id='top-header' className="App-header">
        <Link className='Anchor-unstyled' to='/'>
          <div className="App-logo-container">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-title">
              <span>Ksiazka</span>
              <span>Kucharska</span>
            </div>
          </div>
        </Link>
        {this.props.viewer ? this.userButtons() : this.authButtons()}
      </div>
    );
  }
}

export default Header;