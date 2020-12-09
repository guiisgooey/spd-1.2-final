import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video1.mp4' autoPlay loop muted />
      <h1>Embed 3D models</h1>
      <p>in just a few clicks!</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          Learn More <i className='fas fa-info-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
