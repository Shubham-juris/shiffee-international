import React from 'react'
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
   <section className="relative bg-gray-900 text-white">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-yellow-400">shiffee International</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-lg">
            Discover the latest fashion trends for Men, Women, and Kids.
            Stylish, affordable, and designed to make you stand out.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/new"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
            >
              Shop New Arrivals
            </a>
            <a
              href="/sale"
              className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              Explore Sale
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <motion.div
          className="flex-1 mt-10 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80"
            alt="Fashion Banner"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection