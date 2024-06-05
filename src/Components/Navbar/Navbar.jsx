import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png';
import { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = React.useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'> 
            <img src={logo} alt="logo" /> 
            <p>Shopper</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() => setMenu("shop")} className='nav-item'>Shop{menu === "shop" ?  <hr/> : ""}</li>
            <li onClick={() => setMenu("mens")} className='nav-item'>Men{menu === "mens" ?  <hr/> : ""}</li>
            <li onClick={() => setMenu("womens")} className='nav-item'>Women{menu === "womens" ?  <hr/> : ""}</li>
            <li onClick={() => setMenu("kids")} className='nav-item'>Kids{menu === "kids" ?  <hr/> : ""}</li>
        </ul>
        <div className='nav-login-cart'>
            <button className='login-btn'>Login</button>
            <img src={cart_icon} alt="cart" className='cart-icon'/>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar