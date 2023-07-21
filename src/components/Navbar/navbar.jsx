import React from "react";
import "./navbar.css";
import {  NavLink } from "react-router-dom";

export const Navbar = () => {


  return (
    <nav className="navbar container">
      <NavLink className={({isActive}) => isActive?'active_link': ''} to="/">
        Home
      </NavLink>
      <NavLink className={({isActive}) => isActive?'active_link': ''} to="/about">About</NavLink>
      <NavLink className={({isActive}) => isActive?'active_link': ''} to="/products">Products</NavLink>
      <NavLink className={({isActive}) => isActive?'active_link': ''} to="/collections">Collections</NavLink>
      <NavLink className={({isActive}) => isActive?'active_link': ''} to="/sale">Sale</NavLink>
      <NavLink className={({isActive}) => isActive?'active_link': ''} to="/contact">Contact</NavLink>
    </nav>
  );
};
