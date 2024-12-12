import React from "react";
import Image from "next/image";

const Slider = () => {
  return (
    <div className=" h-[55vh] relative">
      <Image src={"/Slider.jpg"} fill className="absolute" alt="photo" />
      <div className="absolute inset-0 flex px-4 md:px-20 justify-end items-center">
        <div className="text-white space-y-6 flex flex-col">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Leader In Power & <br />
            <span className="text-yellow-400">Automation Technologies</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base max-w-lg text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-medium text-sm">
              Learn More
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium text-sm">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
