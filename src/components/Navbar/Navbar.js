import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
/* import DropDown from './DropDown'; */
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

const Navbar = () => {
  const [click, setClick] = useState(false);
  /* const [dropdown, setDropdown] = useState(false); */

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  /* 
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    } 
  };
  */

  return (
    <nav className='navbar'>
      <div className='menu-icon' onClick={handleClick}>
        <div>
          {click ? (
            <FiX className='nav-icon' />
          ) : (
            <FiMenu className='nav-icon' />
          )}
        </div>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
            about
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/history' className='nav-links' onClick={closeMobileMenu}>
            history
          </Link>
        </li>
        <li
          className='nav-item'
          /*  onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave} */
        >
          <Link to='/articles' className='nav-links' onClick={closeMobileMenu}>
            articles
          </Link>
          {/* {dropdown && <DropDown />} */}
        </li>
        <li className='nav-item'>
          <Link
            to='/halloffametest'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Hof
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact' className='nav-links contact' onClick={closeMobileMenu}>
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
