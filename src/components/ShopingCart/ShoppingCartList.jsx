import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ShoppingCartList = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
      code: "#251395326913984",
      price: 1399,
      qty: 1,
      image:
        "/public/newArrivalSectionImage/Iphone 14 pro 1 (1).png",
    },
    {
      id: 2,
      name: "AirPods Max Silver",
      code: "#53459358345",
      price: 549,
      qty: 1,
      image:
        "/public/newArrivalSectionImage/Iphone 14 pro 1 (5).png",
    },
    {
      id: 3,
      name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium",
      code: "#63632324",
      price: 399,
      qty: 1,
      image:
        "/public/newArrivalSectionImage/Iphone 14 pro 1 (2).png",
    },
  ]);

  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                action === "inc"
                  ? item.qty + 1
                  : item.qty > 1
                  ? item.qty - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <motion.div
      className="p-6 w-full mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

      <AnimatePresence>
        {cartItems.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Image and Info */}
            <div className="flex items-center gap-4 mt-10">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <p className="font-medium text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.code}</p>
              </div>
            </div>

            {/* Quantity and Price */}
            <div className="flex items-center justify-between sm:justify-end sm:space-x-6 mt-4 sm:mt-0">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => handleQuantityChange(item.id, "dec")}
                  className="px-2 py-1 text-lg hover:bg-gray-100"
                >
                  −
                </button>
                <span className="px-3">{item.qty}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, "inc")}
                  className="px-2 py-1 text-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <p className="font-semibold text-gray-800 text-lg">
                ${item.price * item.qty}
              </p>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 text-xl hover:text-red-700"
              >
                ×
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {cartItems.length === 0 && (
        <motion.p
          className="text-center text-gray-500 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Your cart is empty.
        </motion.p>
      )}
    </motion.div>
  );
};

export default ShoppingCartList;
