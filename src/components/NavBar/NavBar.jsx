import React, { useState } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const NavBar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <Link to='/shopping-cart/'><img src={assets.logo} alt="logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <a href='#' onClick={()=>setMenu('home')} className={menu === 'home'?'active':''}>home</a>
        <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu === 'menu'?'active':''}>menu</a>
        <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu === 'mobile-app'?'active':''}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu === 'contact-us'?'active':''}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar-search-icon">
            <Link to='./shopping-cart/cart'><img src={assets.basket_icon} alt="basket icon" /></Link>
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
}

export default NavBar;
