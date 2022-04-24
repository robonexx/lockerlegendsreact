import React from 'react'
import './Hero.scss'

export default function Hero() {
  return (
      <div className="hero">
          <div className='hero-overlay'></div>
      <video autoPlay loop muted className='hero-video'>
        <source src='/la.webm' type='video/webm' />
      </video>
      <section className='hero-wrapper'>
        <h3 className="hero-pretitle">Welcome to</h3>
        <h1 className='hero-title'>LOCKERLEGENDS</h1>

        <h1 className='hero-subtitle'>
          OFFICIAL “LOCKING” PIONEERS WEBSITE of the street dance pioneers
        </h1>
      </section>
    </div>
  )
}
