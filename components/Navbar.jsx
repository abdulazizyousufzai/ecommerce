import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContextProvider";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { getTotalItems, setShowSearch } = useContext(ShopContext);
  const location = useLocation();

  return (
    <div className="flex justify-between items-center py-5 px-5 font-sans bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md">
      {/* Logo - Now in White */}
      <motion.img
        src={assets.logo} // Ensure you use a white version of the logo
        className="w-36 cursor-pointer filter brightness-0 invert" // Converts to white
        alt="Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-5">
        {["HOME", "COLLECTION", "ABOUT", "CONTACT", "BEST PRODUCT"].map((item, index) => (
          <NavLink key={index} to={`/${item.toLowerCase().replace(" ", "-")}`} className="relative group">
            <motion.p
              className="text-sm font-medium uppercase tracking-widest transition-all group-hover:text-gray-300"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.p>
            <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></div>
          </NavLink>
        ))}
      </ul>

      {/* Right Side Icons - Now in White */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        {location.pathname.includes("/collection") && (
          <motion.img
            src={assets.search_icon}
            alt="search"
            onClick={() => setShowSearch(true)}
            className="w-5 cursor-pointer filter brightness-0 invert" // Converts to white
            whileHover={{ scale: 1.2 }}
          />
        )}

        {/* Profile Dropdown */}
        <div className="group relative">
          <motion.img
            src={assets.profile_icon}
            className="w-5 cursor-pointer filter brightness-0 invert" // Converts to white
            alt="Profile"
            whileHover={{ scale: 1.2 }}
          />
          <div className="absolute right-0 hidden group-hover:block mt-2 bg-gray-800 text-white rounded-lg p-3 shadow-lg">
            <p className="cursor-pointer hover:text-gray-300">My Profile</p>
            <p className="cursor-pointer hover:text-gray-300">Orders</p>
            <p className="cursor-pointer hover:text-gray-300">Logout</p>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <motion.img
            src={assets.cart_icon}
            className="w-5 filter brightness-0 invert" // Converts to white
            alt="Cart"
            whileHover={{ scale: 1.2 }}
          />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {getTotalItems()}
            </span>
          )}
        </Link>

        {/* Mobile Menu Button */}
        <motion.img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="cursor-pointer w-5 sm:hidden filter brightness-0 invert" // Converts to white
          alt="Menu"
          whileHover={{ scale: 1.2 }}
        />
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={`absolute top-0 right-0 bottom-0 bg-gray-900 text-white transition-all duration-500 ${
          visible ? "w-full z-50" : "w-0 z-[-1]"
        } overflow-hidden`}
        animate={visible ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3">
            <motion.img
              src={assets.dropdown_icon}
              className="cursor-pointer h-4 rotate-180 filter brightness-0 invert" // Converts to white
              alt="Back"
              whileHover={{ scale: 1.2 }}
            />
            <p className="text-white">Back</p>
          </div>
          <div>
            {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item, index) => (
              <NavLink key={index} onClick={() => setVisible(false)} to={`/${item.toLowerCase()}`} className="block">
                <motion.p
                  className="p-4 w-full border-b border-gray-700 text-white hover:bg-gray-800"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.p>
              </NavLink>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
