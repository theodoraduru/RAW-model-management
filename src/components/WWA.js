import React from "react";
import { Link } from "react-router-dom";
import "./WhoWeAre.css";
import Girl from "../assets/girl.JPG";
import Guy from "../assets/guy.jpeg";
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
      <h1> Who We Are </h1>
      <div className="line1">
        <div className="img-div">
          {" "}
          <img class="whower-img" src={Girl} alt="GirlImg" />
          <img class="whower-img2" src={Guy} alt="GirlImg" />
        </div>

        <p className="p">
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
    </div>
  );
};

export default WWA;

/* <header className="header-nav">
        <div className="rectangle-7">
          <img src="logo.png"></img>
          <div className="line"> </div>

          <div className="social-media1">
            <Link to="https://www.instagram.com/rawmodelmanagement/?hl=en">
              <FaInstagram
                size={30}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
            </Link>
          </div>
          <div className="social-media2">
            <Link to="https://www.instagram.com/rawmodelmanagement/?hl=en">
              <FaInstagram
                size={30}
                style={{ color: "#ffffff", marginRight: "2rem" }}
              />
            </Link>
          </div>
          <img src={Girl} alt="GirlImg" />
          <img src={Guy} alt="Guy Img" />
          <button className="join-us"> </button>
          <button className="drop-button"> </button>
        </div>
      </header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1> Who We Are </h1>
      <div className="line1">
        <br />
        <br />{" "}
        <p>
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
      </div> */
