import React from "react";
import NovaStore from "../assets/NovaStore.mp4";
import { useEffect, useRef } from "react";

const Video = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="vid" id="video">
      <video src={NovaStore} type="video/mp4" autoPlay loop muted></video>
    </div>
  );
};

export default Video;
