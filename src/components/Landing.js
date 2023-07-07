import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import Girl from '../assets/girl.JPG'
import Guy from '../assets/guy.jpeg'


const Landing = () => {
  return (
    <div class="placement-container">
      <div class="grid-container">
        <div class="grid-container--element">
        <img src={Girl} alt="GirlImg"/> 
            <Link to='Landing' className='btn btn-wmn'><b>WOMEN</b></Link>  
        </div>
        <div class="grid-container--element">
        <img src={Guy} alt="Guy Img"/>
        <Link to='Landing' className='btn btn-men'><b>MEN</b></Link>  

        </div>
      </div>
    </div>   
  )
}

export default Landing


// <div class="placement-container">
    //   <div class="grid-container">
    //     <div class="grid-container--element">
    //     <img src={Girl} alt="GirlImg"/>   
    //     </div>
    //     <div class="grid-container--element">
    //     <img src={Guy} alt="Guy Img"/>
    //     </div>
     
