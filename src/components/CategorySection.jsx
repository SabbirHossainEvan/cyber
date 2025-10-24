import React from 'react';

import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaHeadphones,
  FaLaptop,
  FaCamera,
  FaGamepad,
  FaClock,
} from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const categories = [
  { name: "Phones", icon: <FaMobileAlt size={32} /> },
  { name: "Smart Watches", icon: <FaClock size={32} /> },
  { name: "Cameras", icon: <FaCamera size={32} /> },
  { name: "Headphones", icon: <FaHeadphones size={32} /> },
  { name: "Computers", icon: <FaLaptop size={32} /> },
  { name: "Gaming", icon: <FaGamepad size={32} /> },
];

const CategorySection = () => {
  const scrollLeft = () => {
    document.getElementById("categorySlider").scrollLeft -= 200;
  };
  const scrollRight = () => {
    document.getElementById("categorySlider").scrollLeft += 200;
  };

  return (
    <section className="py-10 bg-white text-gray-800 max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Browse By Category</h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <MdChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          >
            <MdChevronRight size={24} />
          </button>
        </div>
      </div>

      <div
        id="categorySlider"
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="min-w-[140px] flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="text-gray-800 mb-2">{cat.icon}</div>
            <p className="font-medium text-gray-700">{cat.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
