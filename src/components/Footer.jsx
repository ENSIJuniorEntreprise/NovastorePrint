import React from "react";
import "./footer.css";
import logo from "../assets/logo-footer.png";
import { FaFacebookF } from "react-icons/fa";
import { BsMessenger, BsInstagram } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import { SlArrowUp } from "react-icons/sl";
function Footer() {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="part1">

          <img src={logo} alt="logo" className="logo-img" />
          <div className="para">
            <span className="footer-span">You think it.</span>
            <span className="footer-span">We print it!</span>
          </div>

        </div>


        <div className="lien part2">
          <h3>LIENS UTILES</h3>
          <ul className="footer-ul">
            <li>
              <a className="footer-a" href="/">
                ACCUEIL
              </a>
            </li>
            <li>
              <a className="footer-a" href="/presentation">
                PRÉSENTATION
              </a>
            </li>
            <li>
              <a className="footer-a" href="/services">
                SERVICES
              </a>
            </li>
            <li>
              <a className="footer-a" href="/contacts">
                CONTACTS
              </a>
            </li>
          </ul>
        </div>



        <div className="lien part3">
          <h3>SERVICES</h3>
          <ul className="footer-ul">
            <li>
              <a className="footer-a" href="/services#section1">
                STORES ET ABRIS
              </a>
            </li>
            <li>
              <a className="footer-a" href="/services#section2">
                IMPRESSION NUMÉRIQUE <br></br>
                <span className="habillage">HABILLAGE</span>
              </a>
            </li>
            <li>
              <a className="footer-a" href="/services#section3">
                REVETEMENT DE FAÇADE<br></br>
                <span className="habillage">ENSEIGNE</span>
              </a>
            </li>
          </ul>
        </div>




        <div className="footer-contact lien">
          <h3>NOUS CONTACTER</h3>
          <div className="span">
            <span className="footer-span">+216 70 721 217</span>

            <a href="mailto:contact@novastoreprint.com">
              <span className="footer-span mail">contact@novastoreprint.com</span>
            </a>          </div>
          <div className="social">
            <a className="footer-a" href="https://www.facebook.com/profile.php?id=100064168410054">
              <FaFacebookF size={"25px"} className="icones" />
            </a>
            <a className="footer-a" href="https://www.instagram.com/novastore_print/">
              <BsInstagram size={"25px"} className="icones" />
            </a>
            <a className="footer-a" href="https://www.facebook.com/messages/t/350742852509" target="_blank" rel="noopener noreferrer">
              <BsMessenger size={"25px"} className="icones" />
            </a>


          </div>

        </div>



      </div>



      <div className="backToTop" style={{ cursor: "pointer" }} onClick={top}>
        <button>
          <SlArrowUp />
        </button>{" "}
        HAUT DE PAGE
      </div>
      <div className="copy">
        &copy; 2023 NOVASTORE PRINT . Tous les droits sont réservés.
      </div>
    </div>
  );
}

export default Footer;
