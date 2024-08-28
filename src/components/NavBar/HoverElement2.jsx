import React from "react";
import "./HoverElement2.css";
import { useNavigate } from "react-router";
function HoverElement2({ image_url, text, dest }) {
  let navigate = useNavigate();
  return (
    <div
      className="hover-service"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/services#${dest}`);
      }}
    >
      {/* <div
        className="hover-service-image"
        style={{ backgroundImage: `url(${image_url})` }}
      ></div> */}
      <img className="hover-service-image" src={image_url}/>
      <div className="hover-service-text">{text}</div>
    </div>
  );
}

export default HoverElement2;
