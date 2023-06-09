import React from "react";
import logo from '../assets/svgs/Logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img className="nav-logo" src={logo} alt="Little Lemon" />
    </header>
  );
}

export default Header;