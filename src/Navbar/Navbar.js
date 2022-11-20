import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/auth-context";
import "./Navbar.css";
const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header className="nav-container">
        <h1 className="header-typo">Treasure App</h1>

        {user?.displayName ? (
          <div className="login-container">
            <span className="welcome">Welcome, {user?.displayName}</span>
            <button onClick={handleSignOut} className="login-btn">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/signin" className="login-btn">
            Login
          </Link>
        )}
      </header>
    </div>
  );
};

export default Navbar;
