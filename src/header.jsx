import React from "react";
import "./header.css"; // Nhập CSS cho kiểu dáng
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Để sử dụng biểu tượng
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // Biểu tượng rắn
import {
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Biểu tượng thương hiệu

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="header-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="header-icon" />
            <span>Hà Nội & Hồ Chí Minh</span>
          </div>
          {/* <div className="header-item">
            <FontAwesomeIcon icon={faPhone} className="header-icon" />
            <span>0769 008 585</span>
          </div> */}
          <div className="header-item">
            <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
            <span>contact@aquaedu.com</span>
          </div>
        </div>
        <div className="header-right">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;