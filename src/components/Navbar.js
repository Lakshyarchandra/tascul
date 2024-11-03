import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "../components/styles/Navbar.css";
import logo from "../../src/assets/logo.png";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <Link to="/" className="brand-logo">
        <img src={logo} alt="Tascul Logo" className="logo" />{" "}
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
