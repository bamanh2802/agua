import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BgAndNavbar from "./bgAndNavbar";
import ServiceAndSkill from "./reason";
import News from "./news";
import Contact from "./contact";
import Navbar from "./navbarHidden";
import Footer from "./footer";
import Header from "./header";
import AboutUs from "./components/AboutUs/AboutUs";
import MentorSlider from "./components/AboutUs/MentorSlider";
import ClientFeedback from "./clientFeedback";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <BgAndNavbar />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ServiceAndSkill />
              <ClientFeedback />
              <News />
              <Contact />
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <AboutUs />
              <MentorSlider />
            </>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}
