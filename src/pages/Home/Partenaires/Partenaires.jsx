import React from "react";
import { Imageslider } from "./Imageslider";
import "./Partenaires.css";
import "./../Apropos/Apropos.css"

export const Partenaires = () => {
  return (
    <div>
      <div className="partenaire-container">
        <div className="Partenaire-title">
          <span className="Lettre1">Nos </span>
          <span className="titre">Partenaires</span>
          <hr id="trait1" className="trait2"/>
        </div>
      </div>

      <Imageslider />
    </div>
  );
};

