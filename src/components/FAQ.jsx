import React, { useState } from "react";

const faqs = [
  {
    question: "What is GPA and why is it important?",
    answer: "GPA (Grade Point Average) is a numerical representation of your academic performance. It's important because universities and employers often use it to evaluate your academic achievements and potential."
  },
  {
    question: "How is GPA calculated?",
    answer: "GPA is calculated by multiplying each course's grade points by its credit hours, summing these values, and then dividing by the total number of credit hours attempted."
  },
  {
    question: "What's the difference between 4.0, 5.0 and 10.0 scales?",
    answer: "These are different grading systems used by universities worldwide. The 4.0 scale is common in the US, the 5.0 scale is used in some European countries, and the 10.0 scale is popular in India and other Asian countries."
  },
  {
    question: "Can I save my GPA calculations?",
    answer: "Currently, this calculator doesn't save your data automatically. We recommend taking a screenshot or noting down your results for future reference."
  },
  {
    question: "How accurate is this GPA calculator?",
    answer: "Our calculator follows standard GPA calculation methods. However, always verify with your university's official grading policy as some institutions may have specific variations."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about GPA calculation
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 sm:p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-gray-500 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 sm:p-6 pt-0 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;