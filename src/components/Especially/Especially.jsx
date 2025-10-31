import React, { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMedicalServices, MdOutlineDeliveryDining, MdSupportAgent } from "react-icons/md";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // shadcn tooltip

const EspeciallyForYou = () => {
  const fileInputRef = useRef(null);

  const handleWhatsAppClick = () => window.open("https://wa.me/8801648818771", "_blank");
  const handleUploadClick = () => fileInputRef.current && fileInputRef.current.click();
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) alert(`Uploaded: ${file.name}`);
  };

  const cards = [
    {
      icon: <FaWhatsapp size={50} className="text-[#00786F]" />,
      title: "Order",
      highlight: "Via WhatsApp",
      subtitle: "01648818771",
      buttonText: "Call Now",
      tooltip: "Order via WhatsApp",
      onClick: handleWhatsAppClick,
    },
    {
      icon: <MdOutlineMedicalServices size={50} className="text-[#00786F]" />,
      title: "UPLOAD PRESCRIPTION",
      highlight: "Easy & Secure",
      subtitle: "Get Medicines Fast",
      buttonText: "Upload Prescription",
      tooltip: "Upload your prescription",
      onClick: handleUploadClick,
    },
    {
      icon: <MdOutlineDeliveryDining size={50} className="text-[#00786F]" />,
      title: "FREE DELIVERY",
      highlight: "No Extra Cost",
      subtitle: "Fast & Safe",
      buttonText: "Order Now",
      tooltip: "Free delivery on all orders",
      onClick: () => alert("Order Now Clicked!"),
    },
    {
      icon: <MdSupportAgent size={50} className="text-[#00786F]" />,
      title: "HELP LINE",
      highlight: "24/7 Support",
      subtitle: "We’re Here to Help",
      buttonText: "Call Now",
      tooltip: "Call our help line",
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
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="mt-5 lg:mt-10">
      <div className="container mx-auto">
        <h2 className="lg:text-3xl text-2xl font-bold text-center dark:text-white mb-6">
          Especially For You
        </h2>

        <input
          type="file"
          ref={fileInputRef}
          accept="application/pdf,image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        <TooltipProvider>
          {/* Large Screen Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-xl p-5 flex flex-col justify-between
                           bg-white dark:bg-black
                           border border-gray-200 dark:border-gray-700
                           shadow-lg"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex justify-end cursor-pointer">{card.icon}</div>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>{card.tooltip}</p>
                  </TooltipContent>
                </Tooltip>

                <div className="mt-3">
                  <p className="font-bold text-lg text-black dark:text-white">{card.title}</p>
                  <p className="mt-1 text-sm text-black/80 dark:text-white/80">{card.highlight}</p>
                  <p className="mt-1 text-sm text-black/70 dark:text-white/70">{card.subtitle}</p>
                </div>
                <button
                  onClick={card.onClick}
                  className="mt-4 py-2 px-4 rounded-lg font-semibold transition-colors
                             bg-[#00786F] text-white
                             dark:hover:bg-white dark:hover:text-black
                             hover:bg-black hover:text-white
                             shadow-md"
                >
                  {card.buttonText}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Small/Medium Slider */}
          <div className="lg:hidden px-5">
            <Slider {...settings}>
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="px-2"
                >
                  <div className="rounded-xl p-5 flex flex-col justify-between
                                  bg-white dark:bg-black
                                  border border-gray-200 dark:border-gray-700
                                  shadow-lg">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex justify-end cursor-pointer">{card.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>{card.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>

                    <div className="mt-3">
                      <p className="font-bold text-[16px] text-black dark:text-white">{card.title}</p>
                      <p className="mt-1 text-[14px] text-black/80 dark:text-white/80">{card.highlight}</p>
                      <p className="mt-1 text-[14px] text-black/70 dark:text-white/70">{card.subtitle}</p>
                    </div>
                    <button
                      onClick={card.onClick}
                      className="mt-4 py-2 px-4 rounded-lg font-semibold transition-colors
                                 bg-[#00786F] text-white
                                 dark:hover:bg-white dark:hover:text-black
                                 hover:bg-black hover:text-white
                                 shadow-md"
                    >
                      {card.buttonText}
                    </button>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default EspeciallyForYou;
