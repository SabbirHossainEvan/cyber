import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsTruck, BsCheckCircle, BsShieldCheck } from "react-icons/bs";
import { Link } from "react-router";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [selectedStorage, setSelectedStorage] = useState("1TB");
  const [liked, setLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const colors = [
    { name: "black", code: "#000000" },
    { name: "purple", code: "#7e22ce" },
    { name: "yellow", code: "#facc15" },
    { name: "red", code: "#dc2626" },
    { name: "white", code: "#e5e5e5" },
  ];

  const images = [
    "./ProductDetailsImage/Image.png",
    "./ProductDetailsImage/image 61.png",
    "./ProductDetailsImage/image 62.png",
    "./ProductDetailsImage/image 63.png",
  ];

  const storageOptions = ["128GB", "256GB", "512GB", "1TB"];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white py-10 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-22">
        {/* LEFT: Image Gallery */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-6"
        >
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4">
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border ${selectedImage === index ? "border-black" : "border-gray-200"
                  }`}
                whileHover={{ scale: 1.1, rotate: 3 }}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>

          {/* Main Image */}
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="w-80 md:w-[400px]"
          >
            <img
              src={images[selectedImage]}
              alt="Main Product"
              className="w-full object-contain drop-shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT: Product Info */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-900">
            Apple iPhone 14 Pro Max
          </h2>

          <div className="flex items-center gap-4 mb-4">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold text-black"
            >
              $1399
            </motion.span>
            <span className="text-gray-400 line-through text-lg">$1499</span>
          </div>

          <p className="text-gray-600 mb-2">Select color :</p>
          <div className="flex gap-3 mb-6">
            {colors.map((c) => (
              <motion.button
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                className={`w-6 h-6 rounded-full border-2 ${selectedColor === c.name ? "border-black" : "border-gray-300"
                  }`}
                style={{ backgroundColor: c.code }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Storage Options */}
          <div className="flex flex-wrap gap-3 mb-6">
            {storageOptions.map((option) => (
              <motion.button
                key={option}
                onClick={() => setSelectedStorage(option)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 border rounded-md text-sm font-medium transition ${selectedStorage === option
                    ? "border-black bg-gray-100"
                    : "border-gray-300"
                  }`}
              >
                {option}
              </motion.button>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
            <div>📱 Screen size: 6.7"</div>
            <div>⚙️ CPU: Apple A16 Bionic</div>
            <div>📸 Main camera: 48–12–12 MP</div>
            <div>🤳 Front camera: 12 MP</div>
            <div>🔋 Battery: 4323 mAh</div>
            <div>💾 Storage: {selectedStorage}</div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-600 mb-6 leading-relaxed"
          >
            Enhanced capabilities with a stunning 6.7" Super Retina XDR display.
            Powered by the A16 Bionic chip for top performance and unmatched
            efficiency. Capture cinematic photos with the advanced triple-camera
            system and enjoy all-day battery life.
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLiked(!liked)}
              className="flex-1 flex items-center justify-center border rounded-md py-3 hover:bg-gray-100 transition"
            >
              {liked ? (
                <AiFillHeart className="text-red-500 mr-2" />
              ) : (
                <AiOutlineHeart className="mr-2" />
              )}
              Add to Wishlist
            </motion.button>

            <Link to="/ShoppingCart">       
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-black text-white text-sm p-10 rounded-md py-4 hover:bg-gray-800 transition"
              >
                Add to Cart
              </motion.button>
            </Link>

          </div>

          {/* Bottom Info */}
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <BsTruck /> Free Delivery 1–2 days
            </div>
            <div className="flex items-center gap-2">
              <BsCheckCircle /> In Stock Today
            </div>
            <div className="flex items-center gap-2">
              <BsShieldCheck /> 1 Year Warranty
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductDetails;
