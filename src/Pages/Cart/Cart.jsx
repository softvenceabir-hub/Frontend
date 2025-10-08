import React from 'react'

const Cart = () => {
  return (
    <div className="lg:pt-20 pt-50">
      <section className="bg-white py-8 lg:px-10 antialiased dark:bg-black md:py-16">
        <div className="mx-auto max-w-screen-full px-x  2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            {/* 🛒 Product List */}
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-black md:p-6">
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <a href="#" className="w-20 shrink-0 md:order-1">
                      <img
                        className="h-20 w-20"
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                        alt="iPhone"
                      />
                    </a>

                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-[#00786f] dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="w-10 border-0 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white"
                          defaultValue={3}
                        />
                        <button
                          type="button"
                          className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-[#00786f] dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                          $2,997
                        </p>
                      </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-3 md:order-2 md:max-w-md">
                      <a
                        href="#"
                        className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                      >
                        APPLE iPhone 15 5G phone, 256GB, Gold
                      </a>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#00786f] hover:underline dark:text-gray-400 dark:hover:text-[#00786f]"
                        >
                          ❤️ Add to Favorites
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-red-600 hover:text-black hover:underline dark:text-red-500"
                        >
                          ✖ Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🧾 Order Summary */}
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-black sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex justify-between">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="font-medium text-gray-900 dark:text-white">
                        $7,592.00
                      </dd>
                    </dl>
                    <dl className="flex justify-between">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="font-medium text-green-600">-$299.00</dd>
                    </dl>
                    <dl className="flex justify-between">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Delivery
                      </dt>
                      <dd className="font-medium text-gray-900 dark:text-white">
                        $99
                      </dd>
                    </dl>
                    <dl className="flex justify-between border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd className="font-bold text-gray-900 dark:text-white">
                        $8,191.00
                      </dd>
                    </dl>
                  </div>
                </div>

                {/* ✅ Primary Button */}
                <button className="flex w-full items-center justify-center rounded-lg bg-[#00786f] px-5 py-2.5 text-sm font-semibold text-white hover:bg-black dark:hover:bg-[#e4cece] dark:hover:text-black transition-colors">
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    or
                  </span>
                  <a
                    href="#"
                    className="text-sm font-medium text-[#00786f] underline hover:no-underline"
                  >
                    Continue Shopping →
                  </a>
                </div>
              </div>

              {/* 🎁 Voucher */}
              {/* <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-black sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="block text-sm font-medium text-gray-900 dark:text-white mb-1"
                    >
                      Do you have a voucher or gift card?
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-[#00786f] focus:border-[#00786f] dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-[#00786f] dark:focus:border-[#00786f]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#00786f] px-5 py-2.5 text-sm font-semibold text-white hover:bg-black transition-colors"
                  >
                    Apply Code
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart
