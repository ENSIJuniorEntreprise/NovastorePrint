import React from "react";
import Chiffre from "./chiffre";
import "./NosChiffres.css";

function NosChiffres() {
  return (
    <div id="chiffre-content">
      {/* <div id="test"></div> */}
      
      <div id="titleChiffre">
        <span id="a-chiffre">N</span>
        <span id="color-chiffre">os C</span>
        <span id="b-chiffre">hiffres</span>
      </div>

      <span id="bolderText">
      lorsque nous nous mettons au travail,
      </span>
      <span id="lighterText">
      nous faisons bouger les choses rapidement et puissamment!
      </span>
      <div id="chiffres">
        <Chiffre number="25" adding="K" />

        <div className="separation">
          <Chiffre number="1500" adding="+" />
        </div>

        <Chiffre number="750" adding="" />
      </div>
    </div>
  );
}
export default NosChiffres;
