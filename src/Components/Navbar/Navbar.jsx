import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'> 
            <img src={logo} alt="logo" /> 
            <p>Shopper</p>
        </div>
        <ul className='nav-menu'>
            <li className='nav-item'>Shop<hr/></li>
            <li className='nav-item'>Men</li>
            <li className='nav-item'>Women</li>
            <li className='nav-item'>Kids</li>
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