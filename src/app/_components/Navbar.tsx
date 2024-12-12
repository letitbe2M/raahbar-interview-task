"use client";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index: any) => {
    setActiveItem(index);
  };

  return (
    <div className="h-[7vh] w-full flex bg-blue-950 text-white">
      <div className="flex items-center justify-between w-full px-4 md:px-[5.8rem]">
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Items (Laptop View) */}
        <div className="hidden md:flex flex-wrap gap-4 items-center uppercase text-xs">
          {[
            "home",
            "about us",
            "services",
            "projects",
            "news",
            "shop",
            "contact us",
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${
                activeItem === index ? "text-orange-500" : ""
              } cursor-pointer`}
              onClick={() => handleClick(index)}
            >
              <p>{item}</p>
              {index < 6 && (
                <div className="hidden md:block border-l border-gray-700 h-6 ml-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal (Mobile View) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 md:hidden">
          <div className="bg-white w-4/5 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Menu</h2>
              <button
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4 uppercase text-xs text-black">
              {[
                "home",
                "about us",
                "services",
                "projects",
                "news",
                "shop",
                "contact us",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    activeItem === index ? "text-orange-500" : ""
                  } cursor-pointer`}
                  onClick={() => {
                    handleClick(index);
                    setIsMenuOpen(false);
                  }}
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="hidden md:block h-full flex-grow md:flex-grow-0">
        <input
          className="w-full md:w-auto input-placeholder h-full bg-blue-darkest placeholder:text-xs text-center"
          placeholder="Enter search keyword"
        />
      </div>

      {/* Mobile Search Bar (optional) */}
      <div className="block md:hidden w-full">
        <input
          className="w-full h-full bg-blue-darkest placeholder:text-xs text-center"
          placeholder="Enter search keyword"
        />
      </div>
    </div>
  );
}

export default Navbar;
