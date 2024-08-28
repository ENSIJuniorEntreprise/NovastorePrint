import React from "react";
import "./HoverElement.css";
function HoverElement({ image_url, icon_url, text }) {
  return (
    <div
      className="hover-element"
      style={{ backgroundImage: `url(${image_url})` }}
    >
      <img src={icon_url} alt="" className="hover-icon" />
      <div className="hover-text">{text}</div>
    </div>
  );
}

export default HoverElement;
