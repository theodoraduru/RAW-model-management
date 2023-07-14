import React from 'react'
import './FooterStyles.css'
import { Link } from 'react-router-dom'

import {FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTwitter, FaSearchLocation} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                    <p>33 Ayetoro St</p>
                    <h4>Fadeyi bustop Ikorodu Rd, Lagos, Nigeria</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> +2348171993275</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> inputhere@gmail.com</h4>
                </div>
                
            </div>
            <div className='right'>
                <h4>About Us</h4>
                <p>Insert some kind of text here</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#ffffff', marginRight: '2rem'}}/>
                    <Link to ='https://www.instagram.com/rawmodelmanagement/?hl=en'><FaInstagram size={30} style={{color: '#ffffff', marginRight: '2rem'}} /></Link>
                    <FaTwitter size={30} style={{color: '#ffffff', marginRight: '2rem'}}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
