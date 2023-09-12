import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'about', text: 'About' },
    { path: 'profile', text: 'Profile' },
    { path: 'login', text: 'Login' },
  ];
  return (
    <header className="header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
