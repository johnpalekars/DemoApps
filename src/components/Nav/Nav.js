/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate("/");
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ padding: "0px 25px " }}
    >
      <div
        style={{ cursor: "pointer" }}
        className="navbar-brand"
        onClick={() => navigate("/")}
      >
        Learn
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/list">
              HTTP
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/chatApp">
              ChatApp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/watch">
              Stopwatch
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/counter">
              Counter
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
