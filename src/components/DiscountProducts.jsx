import React from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart } from "react-icons/ai";

const products = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: "$1437",
    image: "./discountProducts.jsx/Iphone 14 pro 1 (1).png",
  },
  {
    id: 2,
    name: "AirPods Max Silver Starlight Aluminium",
    price: "$549",
    image: "./discountProducts.jsx/Iphone 14 pro 1 (2).png",
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
    price: "$399",
    image: "./discountProducts.jsx/Iphone 14 pro 1 (3).png",
  },
  {
    id: 4,
    name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
    price: "$1499",
    image: "./discountProducts.jsx/Iphone 14 pro 1 (8).png",
  },
];

const DiscountProducts = () => {
  return (
    <section className="px-6 py-12 bg-white max-w-6xl mx-auto px-5">
      <motion.h2
        className="text-2xl sm:text-3xl font-semibold mb-10"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Discounts up to -50%
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            className="relative bg-gray-50 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              transition: { type: "spring", stiffness: 250, damping: 18 },
            }}
          >
            {/* Favorite icon */}
            <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition">
              <AiOutlineHeart size={22} />
            </button>

            {/* Image animation */}
            <motion.img
              src={product.image}
              alt={product.name}
              className="mx-auto mb-6 w-40 h-40 object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />

            <h3 className="text-base font-medium text-gray-700 mb-2">
              {product.name}
            </h3>
            <p className="text-xl font-semibold text-black mb-4">{product.price}</p>

            {/* Button animation */}
            <motion.button
              className="bg-black text-white w-full py-2 rounded-md hover:bg-gray-900 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DiscountProducts;
