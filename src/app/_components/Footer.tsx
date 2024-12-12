import Image from "next/image";
import {
  FaClock,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { TfiAlarmClock } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-500 text-sm">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="footer-image"
          fill
          src="/Slider.jpg"
          className="object-cover"
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-slate-900 opacity-90"></div>
      </div>
      {/* Footer Content */}
      <div className="relative z-10  py-10 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto pl-8 md:pl-0">
        <div>
          <div className="flex justify-start">
            <div className="relative w-[70px] h-[60px]">
              <Image
                alt="petro logo"
                src="/industrial_logo_transparent.png"
                className="absolute"
                fill
              />
            </div>
            <div className="text-gray-700">
              <h1 className="font-bold text-2xl ">INDUSTRIAL</h1>
              <p className="text-xs">Industrial and Engeenering</p>
            </div>
          </div>
          <p>
            We give value to the excellence and top class engineers, but in
            terms of accurate service.
          </p>
          <a href="#" className="text-blue-500">
            Read More &gt;&gt;
          </a>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="">
              <FaTwitter />
            </a>
            <a href="#" className="">
              <FaFacebook />
            </a>
            <a href="#" className="">
              <FaLinkedin />
            </a>
            <a href="#" className="">
              <FaPinterest />
            </a>
            <a href="#" className="">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-xl mb-4 font-bold">
            <span className="border-b-2 border-sky-900">OUR </span>
            SOLUTION
          </h2>
          <ol className="list-disc gap-4 flex flex-col">
            <li>Power And Energy</li>
            <li>Oil and Lubricant</li>
            <li>Material Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Chemical Research</li>
            <li>Alternate Energy</li>
          </ol>
        </div>
        <div>
          <h2 className="text-white text-xl mb-4 font-bold">
            <span className="border-b-2 border-separate border-spacing-y-2 border-sky-900">
              QUICK{" "}
            </span>
            LINKS
          </h2>
          <ol className="list-disc gap-4 flex flex-col">
            <li>About Us</li>
            <li>News</li>
            <li>Testimonials</li>
            <li>Request A Quote</li>
            <li>FAQ</li>
          </ol>
        </div>
        <div>
          <h2 className="text-white text-xl mb-4 font-bold">
            <span className="border-b-2 border-sky-900">GET </span>
            IN TOUCH
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center ">
              <SlLocationPin size={30} color="#89CFF0" />
              <p>Lorance 542B, Tailstoi Town 5248 MT, Wordwide Country</p>
            </div>
            <div className="flex gap-2 items-center ">
              <FiPhone size={25} color="#89CFF0" />
              <p>01865 524 8503</p>
            </div>
            <div className="flex gap-2 items-center ">
              <FiMail size={25} color="#89CFF0" />
              <p>Info@Woodworkshop.Com</p>
            </div>
            <div className="flex gap-2 items-center ">
              <TfiAlarmClock size={25} color="#89CFF0" />
              <p>Mon - Sat: 9am to 6pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center mt-10">
        <div className="bg-slate-950 text-gray-500 text-sm py-2">
          <div className=" mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Left Section */}
            <div className="flex justify-center md:justify-start">
              <span>
                Copyright © 2024 Industrial WP Theme demo. All Rights Reserved.
              </span>
            </div>

            {/* Right Section */}
            <div className="flex justify-center md:justify-end text-center md:text-left">
              <div className="text-sm font-medium">
                <span className="">Developed by ThemeChampion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
