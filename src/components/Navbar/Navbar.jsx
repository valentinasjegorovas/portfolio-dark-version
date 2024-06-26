import React, { useState } from 'react';
import Container from '../Container/Container';
import './navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <Container>
        <div className="navbar">
          <div className="navbar__logo">Portfolio</div>
          <button
            className={`navbar__hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`navbar__menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#works" onClick={closeMenu}>
                Works
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={closeMenu}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
