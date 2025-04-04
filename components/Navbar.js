import React from "react";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white mb-10">

<div className="text-2xl font-bold">
  <span
    style={{
      backgroundImage: "linear-gradient(to right, #6e52c2, #f85e9f)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent"
    }}
  >
    Travlog
  </span>
</div>


      <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <li className="font-bold text-black cursor-pointer">Home</li>
        <li className="cursor-pointer hover:text-black">About</li>
        <li className="cursor-pointer hover:text-black">Destinations</li>
        <li className="cursor-pointer hover:text-black">Packages</li>
        <li className="cursor-pointer hover:text-black">Blog</li>
        <li className="cursor-pointer hover:text-black">Contact Us</li>
      </ul>

      <div className="flex items-center space-x-4">
        <button className="text-gray-600">Log In</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
