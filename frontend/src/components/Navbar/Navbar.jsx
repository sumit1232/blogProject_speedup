import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-2xl font-bold text-blue-600">
            MyBlog
          </a>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/aboutus"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
