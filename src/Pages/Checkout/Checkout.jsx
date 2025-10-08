import React, { useState } from 'react'

const Checkout = () => {
      const [paymentMethod, setPaymentMethod] = useState("card");
  return (
    <div className='lg:pt-28 pt-40 bg-white dark:bg-black min-h-screen transition-colors duration-300'>
      <div className="sm:px-8 px-4 py-10">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-10">
          
          {/* LEFT: Delivery + Payment */}
          <div className="bg-white dark:bg-black p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <form>
              {/* Delivery Details */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  Delivery Details
                </h2>

                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                      Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-md focus:ring-[#00786f] focus:border-[#00786f] outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                      Phone <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-md focus:ring-[#00786f] focus:border-[#00786f] outline-none"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                      Address <span className='text-red-500'>*</span>
                    </label>
                    <textarea
                      placeholder="Enter full address"
                      className="px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-md focus:ring-[#00786f] focus:border-[#00786f] outline-none"
                      rows={3}
                    ></textarea>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                      Email (optional)
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white w-full text-sm rounded-md focus:ring-[#00786f] focus:border-[#00786f] outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  Payment
                </h2>

                <div className="flex flex-wrap gap-y-6 gap-x-12 mb-8">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="pay-method"
                      id="card"
                      className="w-5 h-5 cursor-pointer accent-[#00786f]"
                      defaultChecked
                    />
                    <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                      <img src="https://readymadeui.com/images/visa.webp" className="w-12" />
                      <img src="https://readymadeui.com/images/master.webp" className="w-12" />
                      <img src="https://readymadeui.com/images/american-express.webp" className="w-12" />
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="pay-method"
                      id="paypal"
                      className="w-5 h-5 cursor-pointer accent-[#00786f]"
                    />
                    <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                      <img src="https://readymadeui.com/images/paypal.webp" className="w-20" />
                    </label>
              
                  </div>
                  <div className="flex items-center">
                        {/* Cash on Delivery */}
                <label className="flex items-center gap-3 p-3 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="w-5 h-5 accent-blue-600"
                  />
                  <span className="text-gray-800 dark:text-gray-200">
                    Cash on Delivery
                  </span>
                </label>
              
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 max-lg:flex-col mt-8">
                  <button
                    type="button"
                    className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-gray-900 transition-colors"
                  >
                    Continue Shopping
                  </button>

                  <button
                    type="submit"
                    className="rounded-md px-4 py-2.5 w-full text-sm font-semibold tracking-wide bg-[#00786f] hover:bg-black text-white transition-colors"
                  >
                    Complete Purchase
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="bg-white dark:bg-black p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-24 h-24 rounded-md bg-gray-100 dark:bg-gray-700 p-2">
                  <img src="https://readymadeui.com/images/product14.webp" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Velvet Sneaker</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Black / White</p>
                    <h6 className="text-[15px] font-semibold text-[#00786f] mt-2">$18.00</h6>
                  </div>
                  <span className="text-gray-400 dark:text-gray-500 cursor-pointer hover:text-red-500">✕</span>
                </div>
              </div>

              <hr className="border-gray-300 dark:border-gray-700" />

              <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-3">
                <li className="flex justify-between">
                  <span>Subtotal</span> <span className="font-medium text-gray-900 dark:text-white">$102.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Shipping</span> <span className="font-medium text-gray-900 dark:text-white">$6.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Tax</span> <span className="font-medium text-gray-900 dark:text-white">$5.00</span>
                </li>
                <hr className="border-gray-300 dark:border-gray-700" />
                <li className="flex justify-between text-base font-semibold text-gray-900 dark:text-white">
                  Total <span>$113.00</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Checkout
