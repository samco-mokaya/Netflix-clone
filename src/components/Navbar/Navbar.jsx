import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png' 
import search_icon from '../../assets/search_icon.svg'
import caret from '../../assets/caret_icon.svg'
import profile_img from '../../assets/profile_img.png'
import bell_icon from '../../assets/bell_icon.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="VisioFlix Logo" />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New and Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" />
        <p>Children </p>
        <img src={bell_icon} alt="" />
        <div className="navbar profile">
          <img src={profile_img} alt="" className='profile' />
          <img src={caret} alt="" />
        </div>
      </div>
      </div>
      
   
  )
}

export default Navbar