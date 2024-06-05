import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = React.useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'> 
            <img src={logo} alt="logo" /> 
            <p>Shopper</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() => setMenu("shop")} className='nav-item'><Link style={{textDecoration: "none"}} to="/">Shop</Link>{menu === "shop" ?  <hr/> : ""}</li>
            <li onClick={() => setMenu("mens")} className='nav-item'><Link style={{textDecoration: "none"}} to={"/mens"}>Men</Link>{menu === "mens" ?  <hr/> : ""}</li>
            <li onClick={() => setMenu("womens")} className='nav-item'><Link style={{textDecoration: "none"}} to={"/womens"}>Women</Link>{menu === "womens" ?  <hr/> : ""}</li>
            <li onClick={() => setMenu("kids")} className='nav-item'><Link style={{textDecoration: "none"}} to={"/kids"}>Kids</Link>{menu === "kids" ?  <hr/> : ""}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to="/login"><button className='login-btn'>Login</button></Link>
            <Link to="/cart"><img src={cart_icon} alt="cart" className='cart-icon'/></Link>
        
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar