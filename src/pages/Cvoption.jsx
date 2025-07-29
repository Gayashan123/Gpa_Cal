import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CvOption = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const options = [
    {
      id: "professional_ats",
      title: "Software IT Fields ATS Format",
      description:
        "Optimized for applicant tracking systems with clean formatting and relevant sections.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      color: "bg-blue-100 text-blue-600",
      route: "/professional",
    },
    {
      id: "school_leave",
      title: "Academic CV Format",
      description:
        "Simplified format highlighting education and skills for academic purposes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      color: "bg-purple-100 text-purple-600",
      route: "/academic",
    },
  ];

  const handleSelection = (id) => {
    setSelected(id);
  };

  const handleContinue = () => {
    if (selected) {
      // Find the selected option's route and navigate
      const selectedOption = options.find((o) => o.id === selected);
      if (selectedOption) {
        navigate(selectedOption.route);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Select Your <span className="text-blue-600">CV Style</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the format that best represents your professional journey
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleSelection(option.id)}
              className={`group relative p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border-2 ${
                selected === option.id
                  ? "border-blue-500"
                  : "border-transparent hover:border-gray-100"
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSelection(option.id);
                }
              }}
              aria-pressed={selected === option.id}
              aria-label={`Select ${option.title} CV format`}
            >
              <div
                className={`${option.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6`}
              >
                {option.icon}
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                {option.title}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6">
                {option.description}
              </p>
              <div
                className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selected === option.id
                    ? "bg-blue-500 border-blue-500"
                    : "border-gray-300 group-hover:border-blue-300"
                }`}
              >
                {selected === option.id && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="mt-12 text-center">
            <button
              onClick={handleContinue}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Continue with{" "}
              {options.find((o) => o.id === selected).title.split(" ")[0]} Format
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CvOption;
