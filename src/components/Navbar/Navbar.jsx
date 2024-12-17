import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-300 relative z-50">
      {/* Upper Navbar */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo Section */}
          <a
            href="#"
            className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-white"
          >
            <img src={Logo} alt="Logo" className="w-10" />
            Fashion
          </a>

          {/* Search Bar, Order Button, and Dark Mode */}
          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <IoMdSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-white" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-semibold py-2 px-6 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <span className="hidden sm:block">Order</span>
              <FaCartShopping className="text-xl" />
            </button>

            {/* Dark Mode Toggle */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center items-center gap-6 py-4 text-lg font-medium">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="relative inline-block px-4 py-2 text-gray-700 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300"
                >
                  {data.name}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            ))}
            {/* Dropdown Menu */}
            <li className="relative group cursor-pointer">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300"
              >
                Trending Products
                <FaCaretDown className="group-hover:rotate-180 transition-all duration-300" />
              </a>
              <div className="absolute left-0 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2 w-48 z-40">
                <ul className="py-2">
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="block px-4 py-2 text-gray-700 dark:text-white hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-400 transition-all duration-300"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
