import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ywPrimary h-28 flex items-center">
      <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text */}
        <p className="text-lg font-medium mb-4 md:mb-0 text-gray-100 text-center md:text-left">
          © {new Date().getFullYear()} Yogesh Kumar | All Rights Reserved
        </p>

        {/* Social Links */}
        <div className="flex space-x-8 text-3xl text-gray-100">
          <a
            href="https://github.com/YogeshKumar2309"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/yogeshwebdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-transform transform hover:scale-125"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
