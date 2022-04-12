import React from 'react'
import './Logo.scss'
import LogoImg from '../../assets/images/LL_LOGO_clean.png'

export default function Logo() {
  return (
      <div className='logo'>
          <img src={LogoImg} alt='logo' />
    </div>
  )
}
