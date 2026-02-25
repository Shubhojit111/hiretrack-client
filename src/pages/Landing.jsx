import React from "react";
import { Sparkles } from "lucide-react";
import landingImg from "../assets/images/download.png"
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen px-20  bg-linear-to-br from-[#071129] via-[#0a1b3d] to-[#051021] text-white relative overflow-hidden">
      
      {/* Navbar */}
      <div className="flex justify-between items-center py-6">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Sparkles size={18} />
          </div>
          <span className="text-xl font-semibold">HireTrack</span>
        </div>

        <div className="hidden md:flex gap-10 text-gray-300 text-sm">
          <span className="hover:text-white cursor-pointer">Features</span>
          <span className="hover:text-white cursor-pointer">How it Works</span>
          <span className="hover:text-white cursor-pointer">Testimonials</span>
        </div>

        <div className="flex items-center gap-6">   
          <span className="text-gray-300 hover:text-white cursor-pointer text-sm">
            <Link to="/login">Login</Link>
          </span>

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-medium transition">
            <Link to="/register">Get Started Free</Link>
          </button> 
        </div>
      </div>

      {/* Hero Content */}
      <div className=" mt-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-300 mb-6">
            ⚡ AI-Powered Job Search Management
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Track. Analyze.{" "}
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Land
            </span>
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Your Dream Job.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Stop losing track of applications. HireTrack helps you manage
            your entire job search with AI-powered resume analysis,
            cover letter generation, and smart analytics.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium transition">
              Start Free →
            </button>
            <button className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl text-gray-200 hover:bg-white/20 transition">
              See Features
            </button>
          </div>

          {/* Users */}
          <div className="flex items-center gap-4 mt-10">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                A
              </div>
              <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">
                R
              </div>
              <div className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">
                S
              </div>
              <div className="w-9 h-9 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                P
              </div>
            </div>
            <span className="text-gray-400 text-sm">
              <span className="text-white font-semibold">10,000+</span> job seekers trust HireTrack
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-xl">
          <div className="bg-linear-to-br from-purple-800 via-blue-900 to-green-800 rounded-2xl p-2 shadow-2xl">
            <img
              src={landingImg} // put your dashboard image here
              alt="Dashboard Preview"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
