import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><a className="nav-item" href="#"> Home </a></li>
        <li><a className="nav-item" href="#"> About </a></li>
        <li><a className="nav-item" href="#"> Menu </a></li>
        <li><a className="nav-item" href="#"> Reservations </a></li>
        <li><a className="nav-item" href="#"> Order Online </a></li>
        <li><a className="nav-item" href="#"> Login </a></li>
      </ul>
    </nav>
  );
}

export default Nav;