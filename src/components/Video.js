import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";
import RMM from "../assets/rmm.png";

import HomeVideo from "../assets/landing.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={HomeVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>RAW</h1>
        <p>Model Management</p>
        <div>
          <Link to="Landing" className="btn btn-light">
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
