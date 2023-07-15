import React from "react";
import { Link } from "react-router-dom";
import "./WhoWeAre.css";
import Guy from "../assets/cover.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";

const WWA = () => {
  return (
    <div className="about-us">
      <h1 className="raw-title"> Who We Are </h1>
          {" "}
          <img class="whower-cover" src={Guy} alt="GuyImg" />
          <div className="line-1"> </div>
        <p className="pa">
          {" "}
          Raw model management is one of the leading scouting and model
          management agencies established in 2017 and based in Lagos, Nigeria.
          <br /> <br /> It was founded by Onyemaechi Rapheal with great
          understanding of scouting, model management and experience in the
          fashion industry.
          <br /> <br /> At Raw Models, we immensely believe in our every growth
          we have our discoveries working for major brands such as Valentino,
          Dior, Louis Vuitton, Gucci, JW Anderson, Prada, Comme des Garçons,
          Givenchy, Armani, Issey Miyaki, Lanvin, Marcello Burlon, just to name
          a few.
          <br /> <br /> Our vision is to change the narrative of what modeling
          is in Africa, whilst we are in the ever changing industry we carefully
          scout, develop and nurture our models ensuring longevity all through
          different stages of their careers.
          <br /> <br /> Our strength lies in reaching the elusive and empowering
          lives.{" "}
        </p>
      </div>
  );
};

export default WWA;

// <div class="placement-container">
//   <div class="grid-container">
//     <div class="grid-container--element">
//     <img src={Girl} alt="GirlImg"/>
//     </div>
//     <div class="grid-container--element">
//     <img src={Guy} alt="Guy Img"/>
//     </div>
