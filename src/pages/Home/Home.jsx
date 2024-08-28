import React, { useEffect } from "react";
import "./Home.css";
import { Apropos } from "./Apropos/Apropos";
import { Partenaires } from "./Partenaires/Partenaires";
import Service from "./components/Service";
import HomeImage from "../../components/HomeImage";
function Home() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="home-container">
      <div className="hero-main">
        <HomeImage />

        <div className="hero-content">
          <h1 className="hero-h1">
            NovaStore<span className="hero-span">Print</span>
          </h1>
          <p className="hero-p">
            <span className="hero-span">Leader</span> de la fabrication des
            stores & abris, les impressions numériques & habillage et revêtement de façade.
          </p>
        </div>
      </div>
      
      <div className="home">
      <Service />
        <Apropos />
        <Partenaires/>
      </div>
    </div>
  );
}

export default Home;
