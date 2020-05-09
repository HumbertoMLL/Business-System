import React from 'react';
import '../assets/styles/App.scss';
import '../assets/styles/components/Header.scss';
// import logo from '../static/github.svg';
import userIcon from '../static/woman.svg';

const Header = () => (

  <header className='header'>
    <div className='header__logo'>
      <img src='https://firebasestorage.googleapis.com/v0/b/humbertostark21.appspot.com/o/github.svg?alt=media&token=a96f56f0-88d9-4038-a583-c77dd231e787' alt='' />
    </div>
    <div className='header__user'>
      <img src={userIcon} alt='' />
      <p>Username</p>
    </div>
  </header>

);

export default Header;
