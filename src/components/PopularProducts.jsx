// import React from "react";
// import { motion } from "framer-motion";

// const products = [
//   {
//     id: 1,
//     title: "Popular Products",
//     desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
//     image: "/public/popularProductsImage/Group 1.png",
//     bg: "bg-gray-50",
//     textColor: "text-black",
//   },
//   {
//     id: 2,
//     title: "iPad Pro",
//     desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
//     image: "/public/popularProductsImage/image 64.png",
//     bg: "bg-white",
//     textColor: "text-black",
//   },
//   {
//     id: 3,
//     title: "Samsung Galaxy",
//     desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
//     image: "/public/popularProductsImage/image 41.png",
//     bg: "bg-gray-50",
//     textColor: "text-black",
//   },
//   {
//     id: 4,
//     title: "MacBook Pro",
//     desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
//     image: "/public/popularProductsImage/Macbook 1.png",
//     bg: "bg-neutral-900",
//     textColor: "text-white",
//   },
// ];

// const PopularProducts = () => {
//   return (
//     <section className=" bg-white overflow-hidden">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-200">
//         {products.map((product, i) => (
//           <motion.div
//             key={product.id}
//             className={`${product.bg} ${product.textColor} flex flex-col items-center justify-between text-center px-6 py-10 border-r border-gray-200 last:border-none rounded-lg transition-transform duration-500`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.15 }}
//             viewport={{ once: true }}
//             whileHover={{
//               y: -10,
//               transition: { type: "spring", stiffness: 300, damping: 20 },
//             }}
//           >
//             {/* Image animation */}
//             <motion.img
//               src={product.image}
//               alt={product.title}
//               className="w-52 h-52 object-contain mb-6 mx-auto"
//               whileHover={{ scale: 1.1, rotate: 1 }}
//               transition={{ duration: 0.4 }}
//             />

//             {/* Text */}
//             <motion.h3
//               className="text-2xl font-semibold mb-4"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               {product.title}
//             </motion.h3>

//             <p className="text-sm text-gray-500 dark:text-gray-300 mb-6 max-w-xs">
//               {product.desc}
//             </p>

//             {/* Button animation */}
//             <motion.button
//               className={`border px-6 py-2 rounded-md font-medium transition-all duration-300 relative overflow-hidden ${
//                 product.textColor === "text-white"
//                   ? "border-white hover:bg-white hover:text-black"
//                   : "border-black hover:bg-black hover:text-white"
//               }`}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow:
//                   product.textColor === "text-white"
//                     ? "0px 0px 12px rgba(255,255,255,0.5)"
//                     : "0px 0px 12px rgba(0,0,0,0.2)",
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Shop Now
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularProducts;


import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Popular Products",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/popularProductsImage/Group 1.png",
    bg: "bg-gray-50",
    textColor: "text-black",
  },
  {
    id: 2,
    title: "iPad Pro",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/popularProductsImage/image 64.png",
    bg: "bg-white",
    textColor: "text-black",
  },
  {
    id: 3,
    title: "Samsung Galaxy",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/popularProductsImage/image 41.png",
    bg: "bg-gray-50",
    textColor: "text-black",
  },
  {
    id: 4,
    title: "MacBook Pro",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: "/popularProductsImage/Macbook 1.png",
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
            <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
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



