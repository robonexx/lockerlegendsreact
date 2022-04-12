import React from 'react';
import Logo from '../logo/Logo';
import Navbar from '../Navbar/Navbar';

//styles
import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <Logo />
      <Navbar />
    </div>
  );
}
