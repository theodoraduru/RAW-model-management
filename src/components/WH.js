import React from "react";
import "./WomanHome.css";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import image1 from "../assets/ada-home.JPG";
import image2 from "../assets/chida-home.JPG";
import image3 from "../assets/chidi-home.JPG";
import image4 from "../assets/edith-home.JPG";
import image5 from "../assets/onye-home.JPG";
import image6 from "../assets/uzu-home.jpeg";
import Line from "../assets/Line.png";

const images = [image1, image2, image3, image4, image5, image6];
const names = [
  "EZE ADAEZE MARY",
  "OBIAKWALA CHIDALU",
  "OKONKWO CHIDINMA",
  "EDITH ADA MICHAEL",
  "ONONYE JANELLE",
  "UZU JANE",
];

function WH() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const small = window.matchMedia("(max-width:600px)");

  const settings = {
    // dots:true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (small.matches) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="placement-container">
      <div className="content">
        <h1>RAW</h1>
        <img className="line" src={Line} />
        <p>Model Management</p>
        {/* <div></div> */}
      </div>
      <div className="App-head">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
              key={idx}
            >
              <Link to="/Landing">
                <img src={img} />
                <p>
                  <b>{names[idx]}</b>{" "}
                </p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default WH;

// {
//   /* //notes mobile mode and macbook screen mode
// //names appear
// //scrolling up so it doesnt enter the navbar//landing page media mode
// //video qualtiy */
// }
