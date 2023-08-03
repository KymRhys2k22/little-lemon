import React from 'react'
import logo from '../assets/Logo.svg'

const Nav = () => {
  return (
    <>
      <img className='logo' src={logo} alt="Little Lemon Logo" />
      <nav>
        <ul>
          <li><a className='home' href='#home'>Home</a></li>
          <li><a href='#footer'>About</a></li>
          <li><a href='#menu'>Menu</a></li>
          <li><a href='#reservation'>Reservations</a></li>
          <li><a href='#order-online'>Order Online</a></li>
          <li><a href='#login'>Login</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav