
import React from 'react'

const Header = () => {
  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Home</li>
                <li>Services</li>
                <li>Contacts</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}

export default Header