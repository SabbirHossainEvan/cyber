import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const DetailsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const screenSpecs = [
    { label: "Screen diagonal", value: '6.7"' },
    { label: "The screen resolution", value: "2796×1290" },
    { label: "The screen refresh rate", value: "120 Hz" },
    { label: "The pixel density", value: "460 ppi" },
    { label: "Screen type", value: "OLED" },
    {
      label: "Additionally",
      value: (
        <>
          Dynamic Island
          <br />
          Always-On display
          <br />
          HDR display
          <br />
          True Tone
          <br />
          Wide color (P3)
        </>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 my-10"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Details</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display.
          Advanced technologies allow bold design solutions, and Apple’s displays always impress critics and consumers alike.
        </p>
      </div>

      {/* Screen Section */}
      <motion.div layout className="border-t border-gray-200 pt-5">
        <h3 className="text-lg font-medium text-gray-800 mb-3">Screen</h3>

        <div className="divide-y divide-gray-100">
          {screenSpecs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex justify-between py-2 text-sm md:text-base"
            >
              <span className="text-gray-600">{item.label}</span>
              <span className="text-gray-800 font-medium text-right ml-4">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CPU Section */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t border-gray-200 mt-5 pt-5"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-3">CPU</h3>
            <div className="divide-y divide-gray-100">
              <div className="flex justify-between py-2 text-sm md:text-base">
                <span className="text-gray-600">CPU</span>
                <span className="text-gray-800 font-medium">A16 Bionic</span>
              </div>
              <div className="flex justify-between py-2 text-sm md:text-base">
                <span className="text-gray-600">Number of cores</span>
                <span className="text-gray-800 font-medium">6</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setShowMore(!showMore)}
        className="mt-6 mx-auto flex items-center gap-2 text-gray-700 bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-full transition"
      >
        {showMore ? (
          <>
            View Less <ChevronUp size={16} />
          </>
        ) : (
          <>
            View More <ChevronDown size={16} />
          </>
        )}
      </motion.button>
    </motion.div>
  );
};

export default DetailsSection;
