import React from 'react';
import './components/Header/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="ex.png" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#living-room">Living Room</a></li>
          <li><a href="#kitchen">Kitchen</a></li>
          <li><a href="#outdoors">Outdoors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-content" >
        <h1 >Coming Home Never Felt <br />So Good!</h1>
        <p>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</p>
        <button className="header-button">FIND YOUR STYLE</button>
      </div>
    </header>
  );
};

export default Header;
