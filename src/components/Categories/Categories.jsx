import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Categories = () => {
  const Categorie = [
    { src: "https://img.icons8.com/color/96/pill.png", title: "Medicine" },
    { src: "https://img.icons8.com/color/96/grocery-bag.png", title: "Grocery" },
    { src: "https://img.icons8.com/color/96/microscope.png", title: "Lab Tests" },
    { src: "https://img.icons8.com/color/96/stethoscope.png", title: "Healthcare" },
    { src: "https://img.icons8.com/color/96/face-mask.png", title: "Beauty Care" },
    { src: "https://img.icons8.com/color/96/heart-with-pulse.png", title: "Health" },
    { src: "https://img.icons8.com/color/96/love-potion.png", title: "Sexual Wellness" },
    { src: "https://img.icons8.com/color/96/baby-bottle.png", title: "Baby Care" },
    { src: "https://img.icons8.com/color/96/herbal-medicine.png", title: "Herbal" },
    { src: "https://img.icons8.com/color/96/spray.png", title: "Home Care" },
    { src: "https://img.icons8.com/color/96/open-book--v1.png", title: "Books" },
    { src: "https://img.icons8.com/color/96/vitamins.png", title: "Supplement" },
    { src: "https://img.icons8.com/color/96/apple.png", title: "Food" },
    { src: "https://img.icons8.com/color/96/dog.png", title: "Pet Care" },
    { src: "https://img.icons8.com/color/96/homeopathy.png", title: "Homeopathy" },
    { src: "https://img.icons8.com/color/96/veterinarian.png", title: "Veterinary" },
  ];

  return (
    <section className="mt-5 lg:mt-10">
      <div className="container">
        <h1 className="lg:text-3xl lg:pt-5 leading-[48px] text-[20px] text-center font-bold text-gray-900 dark:text-gray-100">
          Product Categories
        </h1>

        {/* Carousel */}
        <div className="relative lg:pb-10 pb-2">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="gap-2 sm:gap-3 md:gap-4 lg:gap-2">
              {Categorie.map((image, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-1/3 sm:basis-1/4 md:basis-1/6 lg:basis-1/10 flex justify-center"
                >
                  <div className="flex flex-col items-center group cursor-pointer">
                    {/* Circle Box */}
                    <div className="w-24 mt-3 sm:w-28 h-24 sm:h-28 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-pink-50 dark:bg-gray-800 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:border-[#08536e]">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                      />
                    </div>
                    {/* Title */}
                    <p className="mt-2 text-center lg:text-[16px] w-full text-[14px] font-semibold text-gray-800 dark:text-gray-100">
                      {image.title}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows */}
            <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700" />
            <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Categories;
