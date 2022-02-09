import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className={"nav-links"}>
          Log In
        </NavLink>
        <NavLink to="/signup" className={"nav-links"}>
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink className={"logo-link"} to={"/"}>
          <p className="logo">
            iwanna<span>camp</span>
          </p>
        </NavLink>
      </div>
      <ul className="nav-list">
        <li className="nav-list-item">
          <NavLink exact to="/" className={"nav-links"}>
            Home
          </NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
