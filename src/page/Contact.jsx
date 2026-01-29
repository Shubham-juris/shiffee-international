import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have a question, feedback, or
          partnership opportunity — let’s connect.
        </p>
      </motion.div>

      {/* Contact Form & Info */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <motion.div
          className="bg-white p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              required
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              required
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              required
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              📍 <span className="font-semibold">Address 1:</span> 42 Boltons
              Lane, Hayes, UB3 5BH , West London, England.
            </p>
            <p>
              📞 <span className="font-semibold">Phone:</span> +44 7502 749388
            </p>
            <hr className="my-4 border-gray-300" />
            <p>
              📍 <span className="font-semibold">Address 2:</span> 17 Greenland
              Crescent, Southall, UB2 5EP
            </p>
            <p>
              📞 <span className="font-semibold">Phone:</span> +44 7502 749388
            </p>
            <p>
              ⏰ <span className="font-semibold">Business Hours:</span> Mon –
              Sat, 10am – 7pm
            </p>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        className="max-w-6xl mx-auto px-6 pb-16 space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Find Us Here</h2>

        {/* Location 1 Map */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            📍 42 Boltons Lane, Hayes, UB3 5BH
          </h3>
          <iframe
            title="Location 1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4961.476914429535!2d-0.4238903!3d51.514847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766f8dcf5a3b3d%3A0xd1a36f52d0e4cdbc!2s42%20Boltons%20Ln%2C%20Hayes%20UB3%205BH%2C%20UK!5e0!3m2!1sen!2sin!4v1692435670000!5m2!1sen!2sin"
            className="w-full h-80 rounded-xl shadow-md border"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Location 2 Map */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            📍 17 Greenland Crescent, Southall, UB2 5EP
          </h3>
          <iframe
            title="Location 2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4963.623118368921!2d-0.3793212!3d51.5018808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766be21b0c1e71%3A0x7d2fffa91e9e8b1c!2s17%20Greenland%20Cres%2C%20Southall%20UB2%205EP%2C%20UK!5e0!3m2!1sen!2sin!4v1692435890000!5m2!1sen!2sin"
            className="w-full h-80 rounded-xl shadow-md border"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      {/* Closing Section */}
      <motion.div
        className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-14 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-3">Let’s Work Together</h2>
        <p className="text-lg mb-6">
          Partner with us to create a better and stylish tomorrow.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
          Start a Conversation
        </button>
      </motion.div>
    </div>
  );
};

export default Contact;
