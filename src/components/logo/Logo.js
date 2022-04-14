import React from 'react';
import './Logo.scss';
import LogoImg from '../../assets/images/LL_LOGO_clean.png';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
      <Link to='/' className='logo'>
        <img src={LogoImg} alt='logo' />
      </Link>
    </div>
  );
}
