import { Link, NavLink } from "react-router-dom";
import { auth, provider } from "../firebase/config.js";
import { signInWithPopup, signOut } from "firebase/auth";
import Logo from "../assets/logo.png";
import { useState } from "react";
import React from "react";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  const handleSingIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      function refreshPage() {
        window.location.reload();
      }
      refreshPage();
    });
  };

  const handleSingOut = () => {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", false);
    function refreshPage() {
      window.location.reload();
    }
    refreshPage();
  };
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="writenodelogo" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handleSingOut} className="auth">
              <i className="bi bi-box-arrow-right"></i> LogOut
            </button>
          </>
        ) : (
          <button onClick={handleSingIn} className="auth ">
            <i className="bi bi-google"></i> Login
          </button>
        )}
      </nav>
    </header>
  );
};
