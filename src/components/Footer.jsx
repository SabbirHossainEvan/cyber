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
      className="bg-black text-gray-300 py-1 px-6 md:px-16 lg:px-28"
    >
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 justify-center flax  mx-auto">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-white text-2xl font-bold mb-3 mt-5">cyber</h2>
          <p className="text-sm leading-relaxed ">
            We are a residential interior design firm located in <br />Portland.
            Our boutique-studio offers more than you can imagine.
          </p>
          <div className="flex space-x-5 text-lg mt-10 md:mt-25">
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
        <div className=" mt-5">
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Bonus program</li>
            <li className="hover:text-white cursor-pointer transition">Gift cards</li>
            <li className="hover:text-white cursor-pointer transition">Credit and payment</li>
            <li className="hover:text-white cursor-pointer transition">Service contracts</li>
            <li className="hover:text-white cursor-pointer transition">Non-cash account</li>
            <li className="hover:text-white cursor-pointer transition">Payment</li>
          </ul>
        </div>

        {/* Assistance */}
        <div className="mt-5">
          <h3 className="text-white font-semibold mb-4 justify-end block">Assistance to the buyer</h3>
          <ul className="space-y-3 text-sm">
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
  
    </motion.footer>
  );
};

export default Footer;
