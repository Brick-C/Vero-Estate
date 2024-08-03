import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const navbar = () => {
  const user = true;

  return (
    <nav>
      <div className="left">
        <Link href="#" className="logo">
          <img src="../images/logo.png" alt="logo" />
          <span>VeroEstate</span>
        </Link>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <span>John Doe</span>
            <Link to={"/profile"} className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <div>
            <Link href="/" className="log">
              Sign In
            </Link>
            <Link href="/" className="register">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default navbar;
