"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-4">
        <div className="flex items-center">
          <img
            src="/images/logo.png" 
            alt="Logo"
            className="w-[70px]"
          />
          {/* <span className="ml-2 text-2xl font-bold text-gray-800">MOHAMMAD AMIR</span> */}
        </div>


        <ul className="hidden lg:flex lg:space-x-8 lg:ml-80">
          <li><a href="#" className="text-gray-600 hover:text-orange-600">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-orange-600">About Me</a></li>
          <li><a href="#" className="text-gray-600 hover:text-orange-600">Services</a></li>
          <li><a href="#" className="text-gray-600 hover:text-orange-600">Projects</a></li>
          <li><a href="#" className="text-gray-600 hover:text-orange-600">Testimonials</a></li>
          <li><a href="#" className="text-gray-600 hover:text-orange-600">Contact</a></li>
        </ul>
        <div>
          <a
            href="#"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
