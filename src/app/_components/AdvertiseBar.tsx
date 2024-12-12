import React from "react";

const AdvertiseBar = () => {
  return (
    <div className="bg-yellow-500 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-6xl px-4 sm:px-8">
        {/* Left Section */}
        <p className="flex font-bold text-2xl justify-center md:justify-start">
          Looking an adequate solution for your company
        </p>

        {/* Right Section */}

        <a
          href="#"
          className="bg-blue-darkest text-white px-2 py-2 text-sm rounded-sm hover:bg-blue-900 transition duration-200"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AdvertiseBar;
