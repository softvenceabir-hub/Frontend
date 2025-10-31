import React, { useEffect, useState } from "react";
import CategoryCard from "../Common/CategoryCard";
import Product from "../../components/Product/Product";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Shop = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 12;

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setAllProduct(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(allProduct.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allProduct.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const Skeleton = () => (
    <div className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse dark:border-gray-700">
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700" />
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-3" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2" />
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
      <span className="sr-only">Loading...</span>
    </div>
  );

  return (
    <main className="lg:pt-40 w-full pt-50">
      <div className="grid grid-cols-12 lg:gap-8">
        <div className="col-span-12 lg:col-span-2 h-fit">
          <CategoryCard />
        </div>

        <div className="lg:col-span-10 col-span-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-5 gap-y-5 lg:gap-x-5 lg:gap-y-5  lg:p-0">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)
              : currentItems.map((item, index) => (
                  <Product key={index} productinfo={item} />
                ))}
          </div>

          {!loading && (
            <div className="flex flex-wrap justify-center items-center gap-2 mt-8 mb-10">
              {/* Left Arrow */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-md border transition-all duration-200 ${
                  currentPage === 1
                    ? "cursor-not-allowed bg-gray-200 text-gray-400 border-gray-300"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-[#00786f] hover:text-white"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Page Numbers */}
              <div className="flex flex-wrap justify-center gap-1 max-w-full">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-1 rounded-md font-semibold border transition-all duration-200 ${
                      currentPage === i + 1
                        ? "bg-[#00786f] text-white border-[#00786f]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-[#00786f] hover:text-white"
                    } text-sm sm:text-base`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-md border transition-all duration-200 ${
                  currentPage === totalPages
                    ? "cursor-not-allowed bg-gray-200 text-gray-400 border-gray-300"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-[#00786f] hover:text-white"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Shop;
