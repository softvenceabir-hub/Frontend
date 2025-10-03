import React, { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMedicalServices, MdOutlineDeliveryDining, MdSupportAgent } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Especially = () => {
  const fileInputRef = useRef(null);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801648818771", "_blank");
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Uploaded: ${file.name}`);
    }
  };

  const cards = [
    {
      icon: <FaWhatsapp size={50} className="text-white" />,
      title: "Order",
      highlight: "Via WhatsApp",
      subtitle: "01648818771",
      buttonText: "Call Now",
      bgGradient: "from-green-400 to-green-600",
      buttonColor: "bg-white text-green-600",
      onClick: handleWhatsAppClick,
    },
    {
      icon: <MdOutlineMedicalServices size={50} className="text-white" />,
      title: "UPLOAD PRESCRIPTION",
      highlight: "Easy & Secure",
      subtitle: "Get Medicines Fast",
      buttonText: "Upload Prescription",
      bgGradient: "from-cyan-300 to-cyan-500",
      buttonColor: "bg-white text-cyan-600",
      onClick: handleUploadClick,
    },
    {
      icon: <MdOutlineDeliveryDining size={50} className="text-white" />,
      title: "FREE DELIVERY",
      highlight: "No Extra Cost",
      subtitle: "Fast & Safe",
      buttonText: "Order Now",
      bgGradient: "from-green-400 to-green-600",
      buttonColor: "bg-white text-green-700 hover:bg-green-100",
      onClick: () => alert("Order Now Clicked!"),
    },
    {
      icon: <MdSupportAgent size={50} className="text-white" />,
      title: "HELP LINE",
      highlight: "24/7 Support",
      subtitle: "We’re Here to Help",
      buttonText: "Call Now",
      bgGradient: "from-blue-400 to-blue-600",
      buttonColor: "bg-white text-blue-700 hover:bg-blue-100",
      onClick: () => alert("Calling Help Line..."),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
         slidesToShow: 2,
          slidesToScroll: 2,
        
        },
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
 <section className="mt-5 lg:mt-10 lg:p-0 ">
     <div className="container mx-auto ">
      <h2 className="lg:text-3xl pt-5 text-[20px] font-bold text-center dark:text-white color-animation">Especially For You</h2>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="application/pdf,image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Large screen grid */}
      <div className="hidden lg:grid grid-cols-4 gap-4 pt-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg p-5 bg-gradient-to-br ${card.bgGradient} text-white flex flex-col justify-between`}
          >
            <div className="flex justify-end">{card.icon}</div>
            <div>
              <p className="lg:text-[16px] text-[14px] font-semibold lg:font-bold text-black dark:text-white">{card.title}</p>
              <p className="lg:text-[16px] text-[14px] font-semibold lg:font-bold text-black dark:text-white">{card.highlight}</p>
              <p className="lg:text-[16px] text-[14px] font-semibold lg:font-bold text-black dark:text-white">{card.subtitle}</p>
            </div>
            <button
              onClick={card.onClick}
              className={`mt-4 py-2 px-4 hover:bg-black rounded-lg font-semibold ${card.buttonColor}`}
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Small/medium screen slider */}
      <div className="lg:hidden p-5 ">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-2 gap-4  md:basis-1/2">
              <div
                className={`rounded-xl shadow-lg p-5 bg-gradient-to-br ${card.bgGradient} text-white flex flex-col justify-between`}
              >
                <div className="flex justify-end">{card.icon}</div>
                <div>
                  <p className="lg:text-[16px] text-[14px] font-semibold lg:font-bold text-black dark:text-white">{card.title}</p>
                  <p className="lg:text-[16px] text-[14px] font-semibold lg:font-bold text-black dark:text-white">{card.highlight}</p>
                  <p className="lg:text-[16px] text-[14px] font-semibold lg:font-bold text-black dark:text-white">{card.subtitle}</p>
                </div>
                <button
                  onClick={card.onClick}
                  className={`mt-4 py-2 px-4 lg:text-[16px] text-[14px]  hover:bg-black rounded-lg font-semibold ${card.buttonColor}`}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
 </section>
  );
};

export default Especially;
