import React, { useState, useEffect } from "react";
import logo from "./Logoo.png";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import DehazeIcon from "@mui/icons-material/Dehaze";
import HoverElement2 from "./HoverElement2";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    localStorage.setItem("current", currentPage);
  }, [currentPage]);

  useEffect(() => {
    const currentPath = location.pathname;
    setCurrentPage(getPageNameFromPath(currentPath));
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 780) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPageNameFromPath = (path) => {
    const pageName = path.substring(1);
    return pageName || "home";
  };

  const handleSectionClick = (section) => {
    navigate(`/services#${section}`);
  };

  return (
    <nav className="Nav-container">
      <img className="logo" src={logo} alt=""  onClick={() => {
            navigate("/");
            setCurrentPage("home");
          }}/>
      <div
        className={isMobile ? "Nav-elements-mobile" : "Nav-elements"}
        onClick={() => setIsMobile(false)}
      >
        <div
          className={`nav ${currentPage === "home" ? "current-page" : ""}`}
          onClick={() => {
            navigate("/");
            setCurrentPage("home");
          }}
        >
          Accueil{" "}
        </div>
        <div
          className={`nav nav-pres ${
            currentPage === "presentation" ? "current-page" : ""
          }`}
          onClick={() => {
            navigate("/presentation");
            setCurrentPage("presentation");
          }}
        >
          Présentation
        </div>
        <div
          className={`nav nav-service ${
            currentPage === "services" ? "current-page" : ""
          }`}
          onClick={() => {
            navigate("/services");
            setCurrentPage("services");
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Services
          {isHovered && (
            <div className="nav-hover">
              <div className="hover-container">
                <HoverElement2
                  image_url={require("../../assets/Img2.png")}
                  text="Stores & Abris"
                  dest="section1n"
                  onClick={() => handleSectionClick("section1n")}
                />
                <HoverElement2
                  image_url={require("../../assets/Img3.png")}
                  text="Impression Numérique & Habillage"
                  dest="section2n"
                  onClick={() => handleSectionClick("section2n")}
                />
                <HoverElement2
                  image_url={require("../../assets/Img1.jpg")}
                  text="Revêtement De Façade & Enseigne"
                  dest="section3n"
                  onClick={() => handleSectionClick("section3n")}
                />
              </div>
            </div>
          )}
        </div>
        <div
          className={`nav nav-contact ${
            currentPage === "contacts" ? "current-page" : ""
          }`}
          onClick={() => {
            navigate("/contacts");
            setCurrentPage("contacts");
          }}
        >
          Contact
        </div>
      </div>

      <button className="Nav-btn" onClick={() => setIsMobile(!isMobile)}>
        <DehazeIcon
          sx={{
            fontSize: "7vw",
          }}
        />
      </button>
    </nav>
  );
}

export default NavBar;
