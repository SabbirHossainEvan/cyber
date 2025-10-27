import React, { useState } from "react";
import { motion } from "framer-motion";

const OrderSummary = () => {
  const [promoCode, setPromoCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [discount, setDiscount] = useState(0);
  const [subtotal, setSubtotal] = useState(2347);
  const [tax] = useState(50);
  const [shipping] = useState(29);

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "save10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const total = (subtotal - subtotal * discount + tax + shipping).toFixed(2);

  return (
    <motion.div
      className=" mx-auto p-6 bg-white rounded-2xl shadow-md border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-lg font-semibold mb-5">Order Summary</h2>

      {/* Promo Code Section */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label className="block text-sm mb-2 text-gray-600">
          Discount code / Promo code
        </label>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Code"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          onClick={handleApplyPromo}
          className="mt-2 w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all"
        >
          Apply Code
        </button>
      </motion.div>

      {/* Bonus Card Section */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label className="block text-sm mb-2 text-gray-600">
          Your bonus card number
        </label>
        <div className="flex">
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter Card Number"
            className="flex-grow border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="px-4 py-2 bg-gray-900 text-white rounded-r-lg hover:bg-gray-800 transition-all">
            Apply
          </button>
        </div>
      </motion.div>

      {/* Order Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-sm space-y-2"
      >
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span>${tax}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated shipping & Handling</span>
          <span>${shipping}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount (10%)</span>
            <span>- ${(subtotal * discount).toFixed(2)}</span>
          </div>
        )}
        <hr className="my-2 border-gray-300" />
        <div className="flex justify-between font-semibold text-base">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </motion.div>

      {/* Checkout Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-6 w-full bg-black text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
      >
        Checkout
      </motion.button>
    </motion.div>
  );
};

export default OrderSummary;
