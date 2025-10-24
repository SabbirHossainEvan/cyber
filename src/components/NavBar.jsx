import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <motion.nav
      className="bg-white fixed w-full z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-2xl font-bold text-gray-800">
              cyber
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-1000 font-semibold"
                      : "text-gray-700 hover:text-gray-1000 transition-colors"
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-xl text-gray-600">
            {/* Search Toggle */}
            <motion.div
              whileHover={{ scale: 1.2, color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer"
              onClick={() => setShowSearch(!showSearch)}
            >
              {showSearch ? <FiX /> : <FiSearch />}
            </motion.div>

            {/* Cart */}
            <motion.div
              whileHover={{ scale: 1.2, color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FiShoppingCart className="cursor-pointer" />
            </motion.div>

            {/* User */}
            <motion.div
              whileHover={{ scale: 1.2, color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FiUser className="cursor-pointer" />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Animation */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 border-t border-gray-200"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center space-x-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
