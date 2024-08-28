import React, { useState } from "react";
import "./Service.css";
import Abri2 from "../../../assets/abri2.png";
import imp2 from "../../../assets/imp2.png";
import plv2 from "../../../assets/plv2.png";
import Img1 from "../../../assets/Img1.jpg";
import Img2 from "../../../assets/Img2.png";
import Img3 from "../../../assets/Img3.png";
import { useNavigate } from "react-router";



function Service() {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  return (
    <div className="service-container">
      <h1>
        {" "}
        <span>Nos</span> services{" "}
      </h1>
      <hr className="service-hr" />
      <div className="part">
        <div
          className="back-img"
          style={{ backgroundImage: `url(${Img2}` }}
          onClick={() => {
            navigate("/services#section1")
          }
          }
        >
          <img src={Abri2} alt="FGHJK" />
          <p>Stores & Abris</p>
        </div>

        <div
          className="back-img"
          style={{ backgroundImage: `url(${Img3}` }}
          onClick={() => navigate("/services#section2")}
        >
          <img src={imp2} alt="FGHJK" />
          <p className="texttt">
            Impression Numérique <br /> & Habillage
          </p>
        </div>

        <div
          className="back-img"
          style={{ backgroundImage: `url(${Img1}` }}
           onClick={() => navigate("/services#section3")}
        >
          <img src={plv2} alt="FGHJK" />
          <p className="texttt">Revêtement de façade <br></br> & Enseigne</p>
        </div>
      </div>
    </div>
  );
}
export default Service;
