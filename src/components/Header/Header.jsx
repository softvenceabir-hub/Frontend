import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch} from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { ModeToggle } from "../mode-toggle";
import logos from "../../assets/logo.jpg"
export default function Header() {

  const [location, setLocation] = useState("Bangladesh");
  const [searchTerm, setSearchTerm] = useState("");

  const locations = [
    "Badda",
    "Banani",
    "Bashundhara",
    "Dhanmondi",
    "Farmgate",
    "Gulshan",
    "Khilgaon",
    "Mirpur",
    "Mohammadpur",
    "Motijheel",
    "Uttara",
  ];

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert("Please enter something to search.");
      return;
    }
    if (["medicine", "tablet", "mask"].includes(searchTerm.toLowerCase())) {
      alert(`Found results for "${searchTerm}"`);
    } else {
      alert("404 Not Found: No results match your search.");
    }
  };

  return (
    <div>
      <header className="bg-white dark:bg-gray-900 dark:text-white pt-4">
        <div className="container font-family flex flex-col sm:flex-row justify-between items-center gap-3">
          
          {/* Logo */}
         <div className="flex items-center gap-2">
           <div className="flex items-start gap-2">
            <img src={logos} alt="Logo" className="h-8" />
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span className="lg:text-[16px] text-[14px]">Delivery to</span>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border lg:text-[16px] text-[14px] hover:text-[#00786F] font-[500] dark:bg-gray-800 rounded px-2 py-1"
            >
              <option disabled>Dhaka City Areas</option>
              {locations.map((loc) => (
                <option className="hover:text-[#00786F] lg:text-[16px] text-[14px]" key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
         </div>

          {/* Search Bar */}
          <div className="flex w-full sm:w-1/3 border rounded overflow-hidden">
            <input
              type="text"
              placeholder='Search for "healthcare products"'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-3 py-2 outline-none dark:bg-gray-800"
            />
            <button
              onClick={handleSearch}
              className="bg-teal-700 text-white px-4 flex items-center justify-center"
            >
              <FaSearch />
            </button>
          </div>

          {/* Account & Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MdAccountCircle size={28} />
              <span className="hidden sm:block">
                Hello, <b>User</b>
              </span>
            </div>
            <div className="relative">
              <BsCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                0
              </span>
            </div>
         <ModeToggle></ModeToggle> 
           
          </div>
        </div>
      </header>
    </div>
  );
}
