import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="navbar">
      <h1 className="title">PRODUCT DISCUSS</h1>
      <ul className="options">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contributors">Contributors</Link>
        </li>
        <li>
          <Link to="/api">API</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar
