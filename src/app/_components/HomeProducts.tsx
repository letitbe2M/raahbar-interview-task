import React from "react";
import Image from "next/image";
import ProductDetail from "./ProductDetail";

const HomeProducts = () => {
  return (
    <div className="relative py-5 flex flex-col items-center justify-start space-y-8 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-100 -z-10"></div>

      <div className="text-center w-full max-w-5xl mx-auto">
        <p className="text-orange-400 text-xs">
          <span className="pr-1">___</span>WHAT WE DO
          <span className="pl-1">___</span>
        </p>
        <h1 className="py-4 font-bold text-3xl">We Offer Different Services</h1>
        <p className="text-xs text-gray-500">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <p className="text-xs text-gray-500">
          Except sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est.
        </p>
      </div>

      {/* Products */}
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 mx-auto max-w-7xl">
          <ProductDetail
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi."
            image="/sample1.jpg"
            title="Agricultural Processing"
          />
          <ProductDetail
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi."
            image="/sample2.jpg"
            title="Alternate Energy"
          />
          <ProductDetail
            description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi."
            image="/sample3.jpg"
            title="Chemical Research"
          />
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-gray-100 w-full inline-block my-16" />
      </div>

      {/* Code Features */}
      <div className="text-center w-full max-w-5xl mx-auto">
        <p className="text-orange-400 text-xs">
          <span className="pr-1">___</span>OUR CODE FEATURES
          <span className="pl-1">___</span>
        </p>
        <h1 className="py-4 font-bold text-3xl">
          A high-level Quality Control in compliance with National and In
          International regulations and standards
        </h1>
        <p className="text-xs text-gray-500">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Except sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Consequat reprehenderit enim. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-10 h-10 ">
            <Image src={"/icon1.png"} alt="icon" fill />
          </div>
          <p className="font-bold text-sm">VISION</p>
        </div>
        <div className="border-l border-gray-300 h-14"></div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-10 h-10 ">
            <Image src={"/icon2.png"} alt="icon" fill />
          </div>
          <p className="font-bold text-sm">VALUES</p>
        </div>
        <div className="border-l border-gray-300 h-14"></div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-10 h-10 ">
            <Image src={"/icon3.png"} alt="icon" fill />
          </div>
          <p className="font-bold text-sm">MISSION</p>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
