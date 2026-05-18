import React from "react";
import { X } from "lucide-react";

const Login = ({ close }:any) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      {/* Login Card */}
      <div className="bg-gray-900 text-white w-96 p-8 rounded-2xl shadow-2xl
      border border-gray-800 animate-[scaleUp_.35s_ease] relative">

        {/* Close Button */}
        <button
          onClick={close}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center">
          Welcome Back
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 border border-gray-700 
          focus:outline-none focus:border-orange-500 transition"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-3 mb-5 rounded-lg bg-gray-800 border border-gray-700 
          focus:outline-none focus:border-orange-500 transition"
        />

        {/* Login Button */}
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 transition
          py-3 rounded-lg font-semibold shadow-lg"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-[1px] bg-gray-700"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-1 h-[1px] bg-gray-700"></div>
        </div>

        {/* Google Login */}
        <button
          className="w-full bg-white text-black py-3 rounded-lg font-semibold 
          hover:bg-gray-200 transition"
        >
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-center text-gray-400 mt-5 text-sm">
          Don't have an account? 
          <span className="text-orange-500 cursor-pointer ml-1">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;