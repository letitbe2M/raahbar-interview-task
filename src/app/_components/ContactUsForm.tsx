import React from "react";
import Image from "next/image";

const ContactUsForm = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Clients Section */}
          <div>
            <p className="text-orange-400 text-xs tracking-wide uppercase">
              ___ We Work Globally
            </p>
            <h2 className="text-2xl font-bold mt-2">Our Clients</h2>
            <p className="text-gray-500 text-sm mt-4">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit sed quia non qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit. Red quia numquam eius
              modi.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
              {/* Client Logos */}
              {[
                "/icon4.jpg",
                "/icon5.jpg",
                "/icon6.jpg",
                "/icon7.jpg",
                "/icon8.jpg",
                "/icon9.jpg",
              ].map((src, index) => (
                <div key={index} className="relative w-full h-28">
                  <Image
                    fill
                    src={src}
                    alt={`Client icon ${index + 1}`}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <p className="text-orange-400 text-xs tracking-wide uppercase">
              ___ Contact Us
            </p>
            <h2 className="text-2xl font-bold mt-2">Get In Touch</h2>
            <div className="p-2 bg-gray-200 rounded-md">
              <form className="bg-white shadow-md rounded-md p-6 mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring focus:ring-orange-400"
                  aria-label="Your Name"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border outline-none border-gray-300 rounded-md focus:ring focus:ring-orange-400"
                  aria-label="Your Email"
                />
                <select
                  className="w-full p-3 border outline-none border-gray-300 rounded-md focus:ring focus:ring-orange-400"
                  aria-label="Select Purpose"
                >
                  <option>Select One</option>
                  <option>Inquiry</option>
                  <option>Support</option>
                  <option>Other</option>
                </select>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-orange-400 outline-none"
                  aria-label="Your Phone Number"
                />
                <button
                  type="submit"
                  className="w-30 bg-yellow-500 text-black font-semibold py-3 text-xs p-2 rounded-md hover:bg-yellow-400 transition"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-sky-900 py-4 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-6xl px-4 sm:px-8">
          {/* Left Section */}
          <p className="flex justify-center md:justify-start">
            If You Need Any Industrial Solution ... We Are Available For You
          </p>

          {/* Right Section */}
          <a
            href="#"
            className="bg-yellow-500 text-white px-2 py-2 text-sm rounded-sm hover:bg-yellow-400 transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
