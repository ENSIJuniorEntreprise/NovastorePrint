import React, { useState, useEffect } from "react";
import "./Apropos.css";
import img1 from "./img.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.PNG";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

export const Apropos = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3,img4];
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
    clearInterval(interval);
    };
  }, []);

  return (
    <section className="Apropos-title" id="Presentation">
      <span className="Apropos-title">
        <span className="Lettre1">À </span>
        <span className="titre">Propos</span>
        <hr id="trait1" />
      </span>
      <div className="Apropos-container">
      <div className="imaage"><img className="image" src={images[currentImageIndex]} alt="" /></div> 
        <div className="Apropos-text">
          <p>
            <span id="title">Novastore Print</span> est une entreprise, fondée en 2004, notre mission est d'être le partenaire de confiance de nos clients en leur offrant des produits exceptionnels tout en respectant l'environnement et en valorisant notre équipe. 
La satisfaction de nos clients est notre priorité absolue. Nous nous engageons à fournir des produits de qualité supérieure, des délais de livraison rapides et un service clientèle attentif. Notre équipe de professionnels dévoués est toujours prête à répondre à vos questions, à vous conseiller et à trouver les meilleures solutions pour vos besoins.
          </p>
          <div
            className="btn"
            onClick={() => {
              navigate("/presentation#video");
            }}
          >
            <button className="vid-btn">
              Voir Vidéo <AiOutlineArrowRight className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
