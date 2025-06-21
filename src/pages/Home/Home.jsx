import React from 'react'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import Navbar from '../../components/Navbar/Navbar'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className="home"> 
      <Navbar/>
      
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        
      
      <div className="hero-caption">
        <img src={hero_title} alt="" className='caption-img'/>
        <p>Discovering he has rizz unmatched by the rest of the ninjas <br />
        ,he decided to take it upon self and blow out all em shawtys backs for the brotherhood.</p>
    
        <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
        </div>
         <TitleCards/>
        </div>
       
    </div>
    <div className="more-cards">

      <TitleCards title={"Blockbuster movies"}/>
      <TitleCards title={"Only on Netflix"}/>
      <TitleCards title={"Top picks for you"}/>
    </div>
     </div>
  )
}

export default Home
