import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  // Animation variant for icons
  const iconVariants = {
    hover: {
      scale: 1.3,
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-gray-300 py-10 px-6 md:px-16 lg:px-28"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">cyber</h2>
          <p className="text-sm leading-relaxed">
            We are a residential interior design firm located in Portland.
            Our boutique-studio offers more than you can imagine.
          </p>
          <div className="flex space-x-5 mt-5 text-lg">
            {[FaFacebookF, FaTwitter, FaInstagram, FaTiktok].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover="hover"
                variants={iconVariants}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Bonus program</li>
            <li className="hover:text-white cursor-pointer transition">Gift cards</li>
            <li className="hover:text-white cursor-pointer transition">Credit and payment</li>
            <li className="hover:text-white cursor-pointer transition">Service contracts</li>
            <li className="hover:text-white cursor-pointer transition">Non-cash account</li>
            <li className="hover:text-white cursor-pointer transition">Payment</li>
          </ul>
        </div>

        {/* Assistance */}
        <div>
          <h3 className="text-white font-semibold mb-4">Assistance to the buyer</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Find an order</li>
            <li className="hover:text-white cursor-pointer transition">Terms of delivery</li>
            <li className="hover:text-white cursor-pointer transition">Exchange & return of goods</li>
            <li className="hover:text-white cursor-pointer transition">Guarantee</li>
            <li className="hover:text-white cursor-pointer transition">FAQ</li>
            <li className="hover:text-white cursor-pointer transition">Terms of use of the site</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} cyber. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
