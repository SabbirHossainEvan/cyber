import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronDown, ChevronUp } from "lucide-react";

const reviewsData = [
  {
    id: 1,
    name: "Grace Carey",
    date: "24 January, 2023",
    rating: 4,
    comment:
      "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    images: [],
  },
  {
    id: 2,
    name: "Ronald Richards",
    date: "24 January, 2023",
    rating: 5,
    comment:
      "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    images: [],
  },
  {
    id: 3,
    name: "Darcy King",
    date: "24 January, 2023",
    rating: 4,
    comment:
      "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update; otherwise, love this phone! Came in great condition.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    images: [
      "https://images.unsplash.com/photo-1603898037225-2a5b6e3d6a1b?w=200",
      "https://images.unsplash.com/photo-1606813902913-8f7b5a9b1a9a?w=200",
    ],
  },
];

const UserReviewsSection = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleViewMore = () => {
    setVisibleCount((prev) => (prev >= reviewsData.length ? 2 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 bg-white rounded-2xl shadow-sm p-6 md:p-10 my-10"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Customer Reviews</h2>

      {/* Leave Comment Box */}
      <input
        type="text"
        placeholder="Leave Comment"
        className="w-full border border-gray-200 rounded-md px-4 py-2 mb-6 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
      />

      {/* Reviews List */}
      <div className="space-y-5">
        <AnimatePresence>
          {reviewsData.slice(0, visibleCount).map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 rounded-xl p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`${
                            i < review.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>

              <p className="text-gray-700 mt-3 leading-relaxed">{review.comment}</p>

              {/* Optional Images */}
              {review.images.length > 0 && (
                <div className="flex gap-3 mt-4">
                  {review.images.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img}
                      alt="review"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-24 h-24 rounded-md object-cover cursor-pointer hover:scale-105 transition-transform"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View More Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleViewMore}
        className="mt-8 mx-auto flex items-center justify-center gap-2 text-gray-700 border border-gray-300 bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-full transition"
      >
        {visibleCount >= reviewsData.length ? (
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

export default UserReviewsSection;
