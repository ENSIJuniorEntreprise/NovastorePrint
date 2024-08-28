import React from "react";
import "./Contacts.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import CallIcon from "@mui/icons-material/CallOutlined";
import MailIcon from "@mui/icons-material/MailOutlined";
import AddLocationIcon from "@mui/icons-material/AddLocationOutlined";

export function Contacts() {
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@novastoreprint.com";
  };

  return (
    <div className="contact">
      <div className="map">
        <iframe className="mapp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.5789164906337!2d10.191260475671314!3d36.90042057221879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb0abc5b2fdb%3A0x227d72148a44c2e!2sNovaStore%20Print!5e0!3m2!1sfr!2stn!4v1691362284250!5m2!1sfr!2stn"></iframe>
      </div>
      <div className="contact-container">
        <ul>
          <li>
            <CallIcon sx={{ fontSize: "380%" }} />
          </li>
          <li>Téléphone</li>
          <li>+216 70 721 217</li>
        </ul>
        <ul>
          <li>
            <AddLocationIcon sx={{ fontSize: "380%" }} />
          </li>
          <li>Adresse</li>
          <li className="address">Immeuble novastore Z.I chotrana 1 Raoued-Ariana, Tunis, Tunisia</li>
        </ul>
        <ul>
          <li>
            <MailIcon sx={{ fontSize: "380%" }} />
          </li>
          <li>Email</li>
          <li onClick={handleEmailClick}>contact@novastoreprint.com</li>
        </ul>
      </div>
      
      
    </div>
  );
}
