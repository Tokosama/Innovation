import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header p-0 ">
      <div className="mx-auto max-w-7xl py-5 px-2" >
        <nav className="navbar flex justify-between mb-36">
          <div className="navbar-logo h-16">
            <img
              src="ex.png"
              alt="Logo"
            />
          </div>
          <ul className="navbar-links">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#living-room">Living Room</a>
            </li>
            <li>
              <a href="#kitchen">Kitchen</a>
            </li>
            <li>
              <a href="#outdoors">Outdoors</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-content">
          <h1 className="mb-5">
            Coming Home Never Felt <br />
            So Good!
          </h1>
          <p>Quam a diamlorem explicabo quos fugit, ut aliquam modi.</p>
          <button className="header-button">FIND YOUR STYLE</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
