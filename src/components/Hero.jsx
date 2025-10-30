


import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/Iphone Image.png';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <section className='bg-black text-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 p-4 md:p-0 gap-4 items-center max-w-7xl mx-auto pt-20'>

        {/* Left side (Text content) */}
        <div>
          <h3 className='text-gray-400 text-lg md:text-3xl font-medium mt-10'>Pro.Beyond.</h3>
          <h1 className='text-5xl md:text-[100px] mt-3'>
            iPhone 14 <span className='font-bold'>Pro</span>
          </h1>
          <p className='text-gray-300 mt-4'>
            Created to change everything for the better. For everyone.
          </p>

          {/* Animated Button */}
          <Link to="/shopLayouts">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 0px 12px rgba(255,255,255,0.5)',
                backgroundColor: '#ffffff',
                color: '#000000',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='mt-8 px-20 py-5 border border-white rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300'
            >
              Shop Now
            </motion.button>
          </Link>
        </div>

        {/* Right side (Hero image) */}
        <div className='flex justify-center md:justify-end'>
          <motion.img
            src={heroImage}
            alt="iPhone 14 Pro"
            className='w-80 md:w-96'
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
