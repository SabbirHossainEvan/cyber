import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: 1437,
    image: "/public/shopLayoutImage/Iphone 14 pro 1 (1).png",
  },
  {
    id: 2,
    name: "Apple iPhone 11 128GB White (MQ233)",
    price: 510,
    image: "/public/shopLayoutImage/Iphone 14 pro 1 (2).png",
  },
  {
    id: 3,
    name: "Apple iPhone 14 Pro 128GB Deep Purple (MQ093)",
    price: 1600,
    image: "/public/shopLayoutImage/Iphone 14 pro 1 (3).png",
  },
  {
    id: 4,
    name: "Apple iPhone 13 mini 128GB Pink (MLK23)",
    price: 850,
    image: "/public/shopLayoutImage/Iphone 14 pro 1 (9).png",
  },
  {
    id: 5,
    name: "Apple iPhone 14 Pro 256GB Space Black (MQ073)",
    price: 1399,
    image: "/public/shopLayoutImage/Iphone 14 pro 1 (10).png",
  },
  {
    id: 6,
    name: "Apple iPhone 14 Pro 256GB Silver (MQ103)",
    price: 1399,
    image: "/public/shopLayoutImage/Iphone 14 pro 1 (11).png",
  },
  // 🆕 Added 3 more cards below
  {
    id: 7,
    name: "Apple iPhone 14 128GB Midnight (MQ3A3)",
    price: 999,
    image: "/public/shopLayoutImage/Iphone 14 pro 1 (12).png",
  },
  {
    id: 8,
    name: "Apple iPhone 14 Plus 512GB Starlight (MQ513)",
    price: 1299,
    image: "/public/shopLayoutImage/Iphone 14 pro 1 (13).png",
  },
  {
    id: 9,
    name: "Apple iPhone 15 Pro 512GB Blue Titanium (MT233)",
    price: 1699,
    image: "/public/shopLayoutImage/Iphone 14 pro 1 (14).png",
  },
];

export default function ProductGrid() {
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState("rating");
  const [displayedProducts, setDisplayedProducts] = useState([]);

  // Staggered load animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedProducts(products);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Motion Variants for staggered and hover animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center">
        <p className="text-gray-700 font-medium">
          Selected Products: <span className="font-bold">{products.length}</span>
        </p>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-gray-200"
        >
          <option value="rating">By rating</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
        </select>
      </div>

      {/* Animated Product Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {displayedProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                y: -5,
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.05)",
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-base-300 rounded-2xl relative overflow-hidden transition-all"
            >
              {/* Floating Heart Animation */}
              <motion.button
                whileTap={{ scale: 0.7 }}
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-3 right-3 z-10"
              >
                <Heart
                  size={22}
                  className={`${
                    favorites.includes(product.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-400"
                  } transition-colors duration-200`}
                />
              </motion.button>

              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex justify-center items-center p-5"
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="h-48 object-contain select-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.div>

              {/* Info */}
              <motion.div
                className="px-4 pb-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <p className="text-sm text-gray-800 font-medium line-clamp-2 h-10">
                  {product.name}
                </p>
                <motion.p
                  className="text-xl font-semibold mt-2"
                  layout
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ${product.price}
                </motion.p>

                {/* Animated Button */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#111",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mt-3 w-full bg-black text-white py-2 rounded-xl transition-all"
                >
                  Buy Now
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pagination */}
      <motion.div
        className="flex justify-center items-center space-x-2 mt-4 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <button className="px-3 py-1 border rounded-md hover:bg-gray-100">&lt;</button>
        <button className="px-3 py-1 border rounded-md bg-black text-white">1</button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-100">2</button>
        <span className="text-gray-400">...</span>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-100">12</button>
        <button className="px-3 py-1 border rounded-md hover:bg-gray-100">&gt;</button>
      </motion.div>
    </div>
  );
}
