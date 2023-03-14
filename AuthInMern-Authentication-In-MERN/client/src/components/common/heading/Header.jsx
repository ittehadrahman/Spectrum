import React, { useState } from 'react'
import Head from './Head'
import './header.css'
import { Link } from "react-router-dom"
import {  FaTimes, FaBars } from "react-icons/fa"
const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=>setClick(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stores">Stores</Link></li>
            {/* <li><Link to="/pricing">Popular</Link></li> */}
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/team">Team</Link></li>
            {/* <li><Link to="/journal">Journal</Link></li> */}
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={()=>setClick(!click)}>
            {click ? <div><FaTimes/></div> : <div><FaBars /></div>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
