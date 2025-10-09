import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const CategoryCard = () => {
  const [categoryshow, setCategoryshow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const cardRef = useRef(null);

  const Categorie = [
    "Medicine",
    "Grocery",
    "Lab Tests",
    "Healthcare",
    "Beauty Care",
    "Health",
    "Sexual Wellness",
    "Baby Care",
    "Herbal",
    "Home Care",
    "Books",
    "Supplement",
    "Food",
    "Pet Care",
    "Homeopathy",
    "Veterinary",
  ];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setCategoryshow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtered categories based on search
  const filteredCategories = Categorie.filter((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={cardRef} className="max-w-md mx-auto">
      <Card className="border-[1px] border-[#00786F] dark:border-[#00786F] shadow-md">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold lg:-mb-4">All Categories</CardTitle>

            {/* Mobile Toggle */}
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

        <CardContent
          className={`overflow-hidden transition-all duration-300 ${
            categoryshow ? "max-h-[1000px]" : "max-h-0"
          } lg:max-h-full`}
        >
          {/* Search Input */}
          <div className="relative mt-2 mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-10 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00786F] dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>

          {/* Category List */}
          <ul className="flex flex-col gap-3">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((title, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 cursor-pointer hover:text-white hover:bg-[#00786F] transition-colors py-2 px-3 rounded-md"
                >
              
                  <span className="text-[14px] font-semibold">{title}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-400 text-sm">No categories found</li>
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryCard;
