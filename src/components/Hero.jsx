import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleCalculateClick = () => {
    const calculatorSection = document.getElementById("calculator");
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
              University GPA Calculator
            </span>{" "}
            Made Simple
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            Calculate your GPA instantly and track your academic progress. Perfect for university students who want to stay on top of their grades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleCalculateClick}
              className="px-6 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
            >
              Calculate Your GPA Now
            </button>
            <a
              href="#how-it-works"
              className="px-6 py-3 sm:py-4 bg-white text-gray-800 border-2 border-indigo-100 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300"
            >
              Learn How It Works
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Accurate calculations
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Multiple grading scales
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-indigo-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Save your results
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative">
            <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-64 sm:h-72 md:h-80 lg:h-96 bg-indigo-100 rounded-2xl shadow-2xl border-8 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-indigo-600 mb-4">4.0</div>
                <div className="text-lg font-medium text-indigo-800">Your Potential GPA</div>
                <div className="mt-4 text-sm text-indigo-500">Start calculating to see your actual GPA</div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full opacity-20 -z-10 hidden sm:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full opacity-20 -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;