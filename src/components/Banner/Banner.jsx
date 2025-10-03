import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Banner1 from "../../assets/cover1.webp";
import Banner2 from "../../assets/cover2.webp";

const Banner = () => {
 let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    focusOnSelect: true,
    appendDots: (dots) => (
      <div
        style={{
          padding: "30px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "100%",
          background: "black",
          opacity: "80%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                padding: "20px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "100%",
                background: "black",
                opacity: "80%",
              }}
            ></div>
          ),
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          appendDots: (dots) => (
            <div
              style={{
                padding: "15px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={{
                width: "6px",
                height: "6px",
                gap: "4px",
                borderRadius: "100%",
                background: "black",
                opacity: "80%",
              }}
            ></div>
          ),
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                padding: "10px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={{
                width: "8px",
                height: "8px",
                
                borderRadius: "100%",
                background: "black",
                opacity: "50%",
              }}
            ></div>
          ),
        }
      }
    ]
  };
  return (
    <section className="lg:pt-35 pt-50">
      <div className="container">
        <Slider {...settings}>
          <img className="rounded-2xl" src={Banner1} alt="Banner1" />
          <img className="rounded-2xl" src={Banner2} alt="Banner1" />
          <img className="rounded-2xl" src={Banner1} alt="Banner1" />
          <img className="rounded-2xl" src={Banner2} alt="Banner1" />
        </Slider>
      </div>
        {/* Responsive gap CSS */}
      <style jsx="true">{`
        .slick-dots li {
          margin: 0 4px; /* default gap */
        }

        @media (min-width: 1024px) {
          .slick-dots li {
            margin: 0 4px; /* large screens */
          }
        }

        @media (max-width: 600px) {
          .slick-dots li {
            margin: 0 2px; /* small screens */
          }
        }

        @media (max-width: 480px) {
          .slick-dots li {
            margin: 0 1px; /* extra small screens */
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
