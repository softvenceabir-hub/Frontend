import React, { useState } from "react";
import { Link } from "react-router";
import { HiOutlineUser, HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const handleSignup = (e) => {
    e.preventDefault();
  console.log("Signup Details:", { fullName, email, password });
  }
  return (
    <section className="bg-white dark:bg-black md:h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full  max-w-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-center  text-gray-900 dark:text-white mb-6">
          Sign Up
        </h1>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Full Name
            </label>
            <HiOutlineUser className="absolute top-10 left-3 text-gray-400 dark:text-gray-400" size={20} />
            <input
    onChange={(e)=>setFullName(e.target.value)}
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter Your Name"
              required
              className="w-full pl-10 px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00786F]"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Your Email
            </label>
            <HiOutlineMail className="absolute top-10 left-3 text-gray-400 dark:text-gray-400" size={20} />
            <input
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="name@company.com"
              required
              className="w-full pl-10 px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00786F]"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200"
            >
              Password
            </label>
            <HiOutlineLockClosed className="absolute top-10 left-3 text-gray-400 dark:text-gray-400" size={20} />
            <input
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full pl-10 px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00786F]"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-end">
            <a
              href="#"
              className="text-sm font-medium text-[#00786F] hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#00786F] text-white dark:text-white dark:bg-[#00786F] 
                       hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black 
                       focus:ring-4 focus:outline-none focus:ring-[#00786F]/50 
                       font-semibold rounded-md text-sm px-5 py-2.5 transition-colors"
          >
            Sign Up
          </button>

          {/* Login Redirect */}
          <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-[#00786F] hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
