import React, { useEffect, useRef } from "react";
import "./navbarHidden.css"; // Import CSS nếu có
import logo from "./assets/AGUA Logo_Color.png"; // Import hình ảnh logo

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 100) {
          navbarRef.current.style.top = "0";
          navbarRef.current.style.opacity = "1";
        } else {
          navbarRef.current.style.top = "-60px";
          navbarRef.current.style.opacity = "0";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
          <nav ref={navbarRef}  className="hidden-navbar">
            <div className="container">
              <img src={logo} alt="Logo" className="logo" />
              <ul className="nav-links">
                <li><a href="/">HOMEPAGE</a></li>
                <li><a href="/aboutus">ABOUT US</a></li>
                <li><a href="#">AGUA STORY</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">CONTACT</a></li>
              </ul>
              <button className="register-btn">REGISTER</button>

            </div>
          </nav>
  );
};

export default Navbar;
