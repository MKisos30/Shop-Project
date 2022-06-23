import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav">
      <Link to='/' className="nav__homeLink">Home</Link>
      <Link to='/auth' className="nav__homeLink">LogIn</Link>
    </div>
  )
}

export default NavBar