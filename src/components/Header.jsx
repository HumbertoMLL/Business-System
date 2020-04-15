import React from 'react';
import '../assets/styles/App.scss';
import '../assets/styles/components/Header.scss';
import logo from '../static/github.svg';
import userIcon from '../static/woman.svg';

const Header = () => (

  <header className='header'>
    <div className='header__logo'>
      <img src={logo} alt='' />
    </div>
    <div className='header__user'>
      <img src={userIcon} alt='' />
      <p>Username</p>
    </div>
  </header>

);

export default Header;
