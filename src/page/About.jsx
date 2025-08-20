import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">
          About shiffee International
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Redefining fashion with innovation, quality, and global trends 🌍
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          className="bg-white p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To deliver world-class fashion that combines comfort, elegance, and
            style. We aim to inspire confidence and bring global trends closer
            to every wardrobe.
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be a leading international fashion brand known for quality,
            sustainability, and innovation while making fashion accessible to
            everyone.
          </p>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Innovation",
              desc: "Always bringing fresh designs and global fashion trends.",
            },
            {
              title: "Quality",
              desc: "Premium fabrics and craftsmanship you can trust.",
            },
            {
              title: "Sustainability",
              desc: "Eco-friendly processes for a better tomorrow.",
            },
            {
              title: "Customer First",
              desc: "Your satisfaction is at the heart of our journey.",
            },
            {
              title: "Global Reach",
              desc: "Connecting cultures through fashion worldwide.",
            },
            {
              title: "Elegance",
              desc: "Designs that inspire confidence and beauty.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing Section */}
      <motion.div
        className="bg-gradient-to-r from-gray-800 to-gray-600 text-white text-center py-14 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-3">Join the Shiffeice Journey</h2>
        <p className="text-lg mb-6">
          Together, let’s create fashion that inspires the world.
        </p>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
        >
          Contact Us
        </button>
      </motion.div>
    </div>
  );
};

export default About;
