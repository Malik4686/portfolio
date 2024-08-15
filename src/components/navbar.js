import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img
            src="/images/logo.png" 
            alt="Logo"
            className=" w-[70px]"
          />
          {/* <span className="ml-2 text-2xl font-bold text-gray-800">MOHAMMAD AMIR</span> */}
        </div>
        <ul className="flex space-x-8">
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
