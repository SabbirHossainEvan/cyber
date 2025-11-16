


import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Popular Products",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "./popularProductsImage/Group 1.png",
    bg: "bg-gray-50",
    textColor: "text-black",
  },
  {
    id: 2,
    title: "iPad Pro",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "./popularProductsImage/image 64.png",
    bg: "bg-white",
    textColor: "text-black",
  },
  {
    id: 3,
    title: "Samsung Galaxy",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "./popularProductsImage/image 41.png",
    bg: "bg-gray-50",
    textColor: "text-black",
  },
  {
    id: 4,
    title: "MacBook Pro",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "./popularProductsImage/Macbook 1.png",
    bg: "bg-neutral-900",
    textColor: "text-white",
  },
];

const PopularProducts = () => {
  // Duplicate the array so marquee loops seamlessly
  const doubledProducts = [...products, ...products];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: ["0%", "-50%"], // moves halfway across the duplicated list
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // adjust speed here (lower = faster)
        }}
      >
        {doubledProducts.map((product, i) => (
          <motion.div
            key={i}
            className={`${product.bg} ${product.textColor} flex flex-col items-center justify-between text-center px-8 py-10 rounded-lg shadow-sm min-w-[300px]`}
            whileHover={{
              y: -10,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <motion.img
              src={product.image}
              alt={product.title}
              className="w-52 h-52 object-contain mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <h3 className="text-2xl font-semibold mb">{product.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-6 max-w-xs">
              {product.desc}
            </p>
            <motion.button
              className={`border px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                product.textColor === "text-white"
                  ? "border-white hover:bg-white hover:text-black"
                  : "border-black hover:bg-black hover:text-white"
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  product.textColor === "text-white"
                    ? "0px 0px 12px rgba(255,255,255,0.5)"
                    : "0px 0px 12px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PopularProducts;



