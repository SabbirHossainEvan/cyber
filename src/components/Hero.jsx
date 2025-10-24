// import React from 'react';
// // import heroImage from '../assets/hero-image.jpg';
// import heroImage from '../assets/Iphone Image.png';

// const Hero = () => {
//     return (
//         <section className='bg-black'>
//             <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-8 md:p-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white justify-between'>
//                 <div className='grid-span-8'>
//                     <h3>Pro.Beyond.</h3>
//                     <h1 className=''>IPhone 14 <span>Pro</span></h1>
//                     <p>Created to change everything for the better. For everyone</p>
//                     <button className=''>Shop Now</button>
//                 </div>
//                 <div className='grid-span-4 flex justify-center md:justify-end'>
//                     <img src={heroImage} alt="Hero" className='w-80' />
//                 </div>
                
//             </div>
//         </section>

//     );
// };

// export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/Iphone Image.png';

const Hero = () => {
  return (
    <section className='bg-black text-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-8 md:p-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Left side (Text content) */}
        <div>
          <h3 className='text-gray-400 text-lg md:text-xl font-medium'>Pro.Beyond.</h3>
          <h1 className='text-5xl md:text-7xl font-bold mt-2'>
            iPhone 14 <span className='text-gray-400'>Pro</span>
          </h1>
          <p className='text-gray-300 mt-4'>
            Created to change everything for the better. For everyone.
          </p>

          {/* Animated Button */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 0px 12px rgba(255,255,255,0.5)',
              backgroundColor: '#ffffff',
              color: '#000000',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='mt-8 px-8 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300'
          >
            Shop Now
          </motion.button>
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
