import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/frontend_assets/assets';

const Banner = () => {
  return (
    <div className="flex flex-wrap items-center justify-between relative h-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden w-full text-white py-12">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center text-center space-y-4 p-6 w-full md:w-1/2"
      >
        <p className="text-sm uppercase tracking-widest font-semibold text-gray-400">
          Our Bestsellers
        </p>
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl font-bold text-white"
        >
          Latest Arrivals
        </motion.h1>
        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-sm font-medium text-gray-300 flex items-center justify-center space-x-2 group"
        >
          <span>Shop Now</span>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-8 h-[1px] bg-gray-400 group-hover:bg-white transition-all"
          ></motion.div>
        </motion.a>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className="w-full md:w-1/2 h-auto"
      >
        <motion.img
          src={assets.hero_img}
          alt="Hero"
          className="w-full h-auto object-cover rounded-[20px] filter brightness-75"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default Banner;
