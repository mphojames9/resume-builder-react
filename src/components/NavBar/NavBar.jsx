import React, { useState } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';

const NavBar = () => {

    const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <ul onClick={()=>setMenu('home')} className={menu === 'home'?'active':''}>home</ul>
        <ul onClick={()=>setMenu('menu')} className={menu === 'menu'?'active':''}>menu</ul>
        <ul onClick={()=>setMenu('mobile-app')} className={menu === 'mobile-app'?'active':''}>mobile-app</ul>
        <ul onClick={()=>setMenu('contact-us')} className={menu === 'contact-us'?'active':''}>contact us</ul>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="basket icon" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
}

export default NavBar;
