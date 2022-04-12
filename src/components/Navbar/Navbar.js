import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/LL_LOGO_clean.png';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div>
      <nav className='Navbar'>
        {/* <h3 className="logo">LOCKERLEGENDS</h3> */}
        <img src={Logo} className='logo' alt='logo' />
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/history'>history</Link>
          </li>
          <li>
            <Link to='/articles'>articles</Link>
          </li>
          <li>
            <Link to='/halloffametest'>Hof</Link>
          </li>
          <li>
            <Link to='/contacts'>contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
