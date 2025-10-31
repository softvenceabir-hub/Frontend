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
  /* Dots container */
  .slick-dots {
    bottom: -40px !important; 
  }

  /* Base dot style */
  .slick-dots li div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ccc; /* inactive dot */
    border: 1px solid rgba(0,0,0,0.2);
    transition: all 0.3s ease;
  }

  /* Active dot */
  .slick-dots li.slick-active div {
    background: #00a390; /* active dot color */
    border-color: #00a390;
    box-shadow: 0 0 8px rgba(0, 163, 144, 0.5);
    transform: scale(1.2);
  }

  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .slick-dots li div {
      background: #444;
      border: 1px solid #777;
    }
    .slick-dots li.slick-active div {
      background: #00e0c0 !important;
      border-color: #00e0c0;
      box-shadow: 0 0 6px rgba(0, 224, 192, 0.4);
    }
  }

 /* Mobile adjustments */
@media (max-width: 480px) {
  .slick-dots li div {
    width: 2px;  
    height: 2px;  
  }
  .slick-dots li {
    margin: 0 2px;
  }
  .slick-dots {
    bottom: -60px !important;
  }
}

`}</style>

    </section>
  );
};

export default Banner;
