import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

const NavigationBar = () => {
  return (
    <>
      <div className="navbar">
        <NavLink to="/" className="tab">
          Home
        </NavLink>
        <NavLink to="/about" className="tab">
          About
        </NavLink>
        <NavLink to="/contact" className="tab">
          Contact us
        </NavLink>
      </div>
    </>
  );
};
export default NavigationBar;
