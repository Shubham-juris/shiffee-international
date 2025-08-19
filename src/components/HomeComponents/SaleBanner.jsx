import React from "react";
import { motion } from "framer-motion";
const SaleBanner = () => {
  return (
    <motion.section
      className="relative bg-yellow-400 py-16 text-center text-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">Mega Sale is Live!</h2>
      <p className="text-lg mb-6">Get up to 50% off on selected items.</p>
      <a
        href="/sale"
        className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
      >
        Shop Sale Now
      </a>
    </motion.section>
  );
};

export default SaleBanner;
