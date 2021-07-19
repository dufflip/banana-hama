import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { ACTION_logout } from "../store/ducks/login";

import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import "../css/header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  const dispatch = useDispatch();
  return (
    <div>
      <header className="header-HD">
        <a to="/" className="logo-HD">
          Banana - Hama
        </a>
        {/* toggle */}
        <div className="menu-icon-HD" onClick={handleClick}>
          {click ? <GrClose /> : <AiOutlineMenu />}
        </div>
        <ul className={click ? "nav-menu-HD active" : "nav-menu-HD"}>
          <li className="nav-item-HD">
            <Link to="/" className="nav-links-HD" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item-HD">
            <Link to="/shop" className="nav-links-HD" onClick={closeMobileMenu}>
              Shop
            </Link>
          </li>
          <li className="nav-item-HD">
            <Link
              to="/slide-poducts"
              className="nav-links-HD"
              onClick={closeMobileMenu}
            >
              What's New
            </Link>
          </li>
          <li className="nav-item-HD">
            <Link
              to="/about-us"
              className="nav-links-HD"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item-HD">
            <Link
              to="/"
              className="nav-links-HD"
              onClick={() => dispatch(ACTION_logout())}
            >
              Logout
            </Link>
          </li>
        </ul>
        {/* final */}
        <ul className="navigation-HD">
          <li>
            <Link to="/" className="active-HD">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/slide-poducts">What's New</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/" onClick={() => dispatch(ACTION_logout())}>
              Logout
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
