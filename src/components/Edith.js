import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";
import "./Edith.css";
import { Link } from "react-router-dom";
import editha from "../assets/edith/editha.jpg";
import edithb from "../assets/edith/edithb.jpg";
import edithc from "../assets/edith/edithc.JPG";
import edithd from "../assets/edith/edithd.JPG";
import edithe from "../assets/edith/edithe.JPG";
import edithf from "../assets/edith/edithf.JPG";
import Transition from "../Transition";
const Edith = () => {
  return (
    <div className="placement-container">
      <div className="content">
        <h1>EDITH ADA MICHAEL</h1>
        <p>
          <b>
            HEIGHT: 177.8 CM WAIST: 24 CM BUST: 33 CM HIPS: 34CM SHOES: 40
            DRESS: 6{" "}
          </b>
        </p>
        <div className="Main-container">
          <Link
            className="ig"
            to="https://www.instagram.com/ada_michaeledith/?igshid=MzRlODBiNWFlZA%3D%3D"
          >
            <FaInstagram
              size={30}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
          </Link>
          <img src={editha} />
          <img src={edithb} />
          <img src={edithc} />
          <img src={edithd} />
          <img src={edithe} />
        </div>
      </div>
    </div>
  );
};

export default Transition(Edith);
