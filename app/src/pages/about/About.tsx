import React from 'react'
import Description from './Description'
import './AboutStyle.css'
import Header from '../../components/header/Header'
import Info from './Info'
import img from '../../assets/background-card.jpg'

const About: React.FC = () => {    
  return (
    <>
      <Header title="Sobre" noAbout />
      <div className='about-container'>
        <div className='card-description'>
          <Description />
        </div>
        
        <div className='card-info'>
          <img src={img} alt="" />
          <Info />
        </div>  
      </div>
    </>
  )
}

export default About
