import React, { useState } from "react";
import {
  Card,

  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
const CategoryCard = () => {
    const [categoryshow, setCategoryshow] = useState(false); // moblie menu
  const Categorie = [
    {
      src: "https://img.icons8.com/color/96/pill.png",
      title: "Medicine",
    },
    {
      src: "https://img.icons8.com/color/96/grocery-bag.png",
      title: "Grocery",
    },
    {
      src: "https://img.icons8.com/color/96/microscope.png",
      title: "Lab Tests",
    },
    {
      src: "https://img.icons8.com/color/96/stethoscope.png",
      title: "Healthcare",
    },
    {
      src: "https://img.icons8.com/color/96/face-mask.png",
      title: "Beauty Care",
    },
    {
      src: "https://img.icons8.com/color/96/heart-with-pulse.png",
      title: "Health",
    },
    {
      src: "https://img.icons8.com/color/96/love-potion.png",
      title: "Sexual Wellness",
    },
    {
      src: "https://img.icons8.com/color/96/baby-bottle.png",
      title: "Baby Care",
    },
    {
      src: "https://img.icons8.com/color/96/herbal-medicine.png",
      title: "Herbal",
    },
    {
      src: "https://img.icons8.com/color/96/spray.png",
      title: "Home Care",
    },
    {
      src: "https://img.icons8.com/color/96/open-book--v1.png",
      title: "Books",
    },
    {
      src: "https://img.icons8.com/color/96/vitamins.png",
      title: "Supplement",
    },
    {
      src: "https://img.icons8.com/color/96/apple.png",
      title: "Food",
    },
    {
      src: "https://img.icons8.com/color/96/dog.png",
      title: "Pet Care",
    },
    {
      src: "https://img.icons8.com/color/96/homeopathy.png",
      title: "Homeopathy",
    },
    {
      src: "https://img.icons8.com/color/96/veterinarian.png",
      title: "Veterinary",
    },
  ];
  return (
    <div>
      <Card className="border-[1px] border-[#00786F]">
        <CardHeader>
           <div className="flex justify-between items-center">
                  <CardTitle className="lg:-mb-4">All Category</CardTitle>

                  {/* Mobile Toggle Button */}
                  <button
                    onClick={() => setCategoryshow(!categoryshow)}
                    className="flex items-center gap-1 lg:hidden text-sm font-medium"
                  >
                    {categoryshow ? (
                      <ChevronUp className="w-6 h-6 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="w-6 h-6 transition-transform duration-200" />
                    )}
                  </button>
                </div>
     
        </CardHeader>
        <CardContent className={`${categoryshow ? "block" : "hidden"} lg:block`}
>
          <ul >
            {Categorie.map((item, index) => (
              <li key={index} className="flex gap-3 items-center">
                <img
                  key={index}
                  src={item.src}
                  alt={item.title}
                  className="w-6 h-6 inline-block"
                />
                <span className="mt-4 text-[14px] w-full hover:underline hover:text-[#00786F] font-[600] cursor-pointer">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryCard;

       

