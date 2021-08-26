import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";

import { ACTION_logout } from "../store/ducks/login";

import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

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
            <NavLink to="/" exact activeClassName="active-HD">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" activeClassName="active-HD">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/slide-poducts" activeClassName="active-HD">
              What's New
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" activeClassName="active-HD">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={() => dispatch(ACTION_logout())}>
              Logout
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
