import React from "react";

const SingleProduct = () => {
  return (
    <section className="py-10 bg-white md:py-16 dark:bg-black antialiased">
      <div className="max-w-screen-xl px-4 lg:pt-30 pt-50 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16">
          {/* Product Image */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto aspect-square">
            <img
              className="w-full h-full object-cover rounded-2xl shadow-md dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
              alt="Product"
            />
            <img
              className="w-full h-full object-cover rounded-2xl shadow-md hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
              alt="Product"
            />
          </div>

          {/* Product Details */}
          <div className="mt-8 lg:mt-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-snug">
              Apple iMac 24" M1 8GB 256GB SSD (Pink)
            </h1>

            {/* Price & Rating */}
            <div className="mt-4 sm:flex sm:items-center sm:gap-5">
              <p className="text-2xl font-extrabold text-[#00786f] sm:text-3xl">
                $1,249.99
              </p>

              <div className="flex items-center gap-2 mt-3 sm:mt-0">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">(5.0)</p>
                <a
                  href="#"
                  className="text-sm font-medium text-[#00786f] hover:underline"
                >
                  345 Reviews
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-[#00786f] transition-all dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
                Add to favorites
              </button>

              <button className="flex items-center justify-center py-2.5 px-6 text-sm font-semibold text-white bg-[#00786f] rounded-lg hover:bg-black transition-colors">
                <svg
                  className="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Add to cart
              </button>
            </div>

            {/* Divider */}
            <hr className="my-8 border-gray-200 dark:border-gray-800" />

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Studio-quality three mic array for crystal-clear calls and voice
              recordings. Six-speaker sound system for a remarkably robust and
              high-quality audio experience. Up to 256GB of ultrafast SSD
              storage.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
              Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
              Magic Keyboard or Magic Keyboard with Touch ID.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
