import "./BgAndNavbar.css";
import logo from "./assets/AGUA Logo_Color.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus} from "@fortawesome/free-solid-svg-icons";
const BgAndNavbar = () => {
  return (
    <div className="bg-container">
      <div className="bg-overlay"></div>

      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="170" />
        </a>
        <ul className="nav">
          <li className="nav-item"><a className="nav-link" href="/">HOMEPAGE</a></li>
          <li className="nav-item"><a className="nav-link" href="/aboutus">ABOUT US</a></li>
          <li className="nav-item"><a className="nav-link" href="#">AGUA STORY</a></li>
          <li className="nav-item"><a className="nav-link" href="#">NEWS</a></li>
          <li className="nav-item"><a className="nav-link" href="#">CONTACT</a></li>
        </ul>
      </nav>


      <div className="content-bg">
          <h1 className="animate-fade-down">Welcome to AGUA</h1>
          <p className="animate-fade-down ">
              Experience a happy education, experience a happy life  
          </p>
          <a className="contact-btn config animate-slide-left">
              <FontAwesomeIcon icon={faUserPlus} className="contact-icon-bg" />
              REGISTER NOW
          </a>
      </div>
    </div>
  );
};

export default BgAndNavbar;
