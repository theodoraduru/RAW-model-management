import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from  'react-icons/fa'
import {FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTwitter, FaSearchLocation} from 'react-icons/fa'
import './NavStyles.css'

const Navbar = () => {
    const[click,setClick] =useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <Link to ='/'><h1>RAW</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
            <Link to ='https://www.instagram.com/rawmodelmanagement/?hl=en'><FaInstagram size={30} style={{color: '#ffffff', marginRight: '2rem'}} /></Link>
            </li>
            <li>
                <Link to='/'>Women</Link>
            </li>
            <li>
                <Link to='/'>Men</Link>
            </li>
            <li>
                <Link to='/'>About</Link>
            </li>
            <li>
                <Link to='/'>Contact</Link>
                {/* <li>
                <Link to='/'>Join Us</Link>
                </li> */}
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : (<FaBars size={20} style={{color: '#fff'}} />) }
            
        </div>
      
    </div>
  )
}

export default Navbar
