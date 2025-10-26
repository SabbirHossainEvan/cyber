import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const totalReviews = 125;
  const averageRating = 4.8;

  const ratingData = [
    { label: "Excellent", value: 100 },
    { label: "Good", value: 11 },
    { label: "Average", value: 3 },
    { label: "Below Average", value: 8 },
    { label: "Poor", value: 1 },
  ];

  // To calculate bar width dynamically based on max value
  const maxValue = Math.max(...ratingData.map((r) => r.value));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 my-10"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reviews</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side: Average rating */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center bg-gray-50 rounded-xl py-8"
        >
          <h3 className="text-5xl font-bold text-gray-900">{averageRating}</h3>
          <p className="text-gray-500 text-sm mt-1">
            of {totalReviews} reviews
          </p>
          <div className="flex mt-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={22}
                className={`${
                  i < Math.floor(averageRating)
                    ? "text-yellow-400 fill-yellow-400"
                    : i < averageRating
                    ? "text-yellow-400 fill-yellow-400 opacity-60"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right side: Rating bars */}
        <div className="space-y-3">
          {ratingData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-24 text-sm text-gray-700">{item.label}</div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.value / maxValue) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-yellow-400 rounded-full"
                />
              </div>
              <div className="w-8 text-right text-sm text-gray-600">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewsSection;
