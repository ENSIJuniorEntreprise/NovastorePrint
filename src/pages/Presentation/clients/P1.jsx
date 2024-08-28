import { React } from "react";
import im3 from "./Group 107.png";
import pic from "./pic.png";
import "./P1.css";

export default function P1(props) {
  return (
    <div>
      <div className="avis-titre">
        <span>
          <h1 id="a">Ce Que Les Clients Disen</h1>
        </span>{" "}
        <span>
          {" "}
          <h1 id="color">t De </h1>
        </span>
        <span className="b">
          {" "}
          <h1 id="b"> Nous</h1>
        </span>{" "}
      </div>
      <hr className="light" />
      <div className="parent">
         {props.Users &&
          props.Users.map((record) => {
            return (
              <div className="av1" key={record.id}>
                <div className="avis-container">
                  <div className="child1">

                    <div className="appostrophe">
                      <img src={im3} className="apostrophe-image" />
                    </div>

                    <div className="avis-text">
                      <p id="avis">{record.avis}</p>
                    </div>

                    <div className="imname1">
                      <div className="im">
                        <img src={record.image} id="i" loading="lazy" />
                      </div>
                      <div className="avis-name">
                        <p id="avis-nom">{record.name}</p>
                        <p id="avis-p">
                          <strong>-{record.poste}-</strong>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
            );
          })} 

      </div>
    </div>
  );
}
