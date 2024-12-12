import React from "react";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";

type Props = {};

const HeaderAndInfo = (props: Props) => {
  return (
    <>
      <div className="bg-gray-100 text-gray-700 text-sm py-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Left Section */}
          <div className="flex justify-center md:justify-start">
            <span>Welcome to Leader in Industrial Solution since 2005</span>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end text-center md:text-left">
            <div className="text-sm font-medium">
              Global Certificate
              <span className="text-gray-900 font-semibold">ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-700 text-sm py-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          {/* <!-- Left Section --> */}
          <div className="flex space-x-4 justify-center sm:justify-start">
            <div className="relative w-[70px] h-[60px]">
              <Image
                alt="petro logo"
                src="/industrial_logo_transparent.png"
                className="absolute"
                fill
              />
            </div>
            <div className="">
              <h1 className="font-bold text-2xl text-black">INDUSTRIAL</h1>
              <p className="text-xs">Industrial and Engeenering</p>
            </div>
          </div>
          {/* <!-- Right Section --> */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 items-center space-y-2 sm:space-y-0 text-center">
            <div className="flex items-center space-x-1">
              <SlLocationPin size={40} className="pr-2" color="#F59E0B" />
              <div className="flex flex-col justify-start items-start">
                <p className="font-medium">Email Address</p>
                <p>info@industrial.com</p>
              </div>
            </div>
            <div className="border-l border-gray-300 h-12"></div>
            <div className="flex space-x-1  justify-start items-start">
              <FiPhone size={40} className="pr-2" color="#F59E0B" />
              <div className="flex flex-col justify-start items-start">
                <p className="font-medium">Call Us</p>
                <p className="text-black hover:underline">18004567980</p>
              </div>
            </div>

            <a
              href="#"
              className="bg-yellow-500 text-black px-3 py-3 rounded-sm hover:bg-yellow-600 transition duration-200"
            >
              REQUEST A QUOTE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAndInfo;
