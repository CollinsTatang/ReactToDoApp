import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
    { path: 'profile', text: 'Profile' },
    { path: 'login', text: 'Login' },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="navbar">
      <button type="submit" className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
        {navbarOpen ? (<MdClose style={{ width: '32px', height: '32px' }} />) : (<FiMenu style={{ width: '32px', height: '32px' }} />)}
      </button>
      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path} onClick={() => setNavbarOpen(false)}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
