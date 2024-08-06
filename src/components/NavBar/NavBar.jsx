import React from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt='logo' />
    </div>
  );
}

export default NavBar;
