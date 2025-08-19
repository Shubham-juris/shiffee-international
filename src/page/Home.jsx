import React from "react";
import { motion } from "framer-motion";
import img from "../assets/Home/woman-6186493_1280.jpg";
const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
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
              <span className="text-yellow-400">Shiffee international </span>
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

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Men", "Women", "Kids", "Accessories"].map((cat, index) => (
            <motion.a
              key={cat}
              href={`/${cat.toLowerCase()}`}
              className="relative h-56 rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={img}
                alt={cat}
                className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-xl font-bold text-white">{cat}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <img
                  src={`https://source.unsplash.com/400x400/?clothes,fashion,${i}`}
                  alt="Product"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Trendy Outfit {i}</h3>
                  <p className="text-gray-500">₹{i * 999}</p>
                  <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
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

      {/* Newsletter */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter to get updates on the latest fashion
            trends and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg text-black w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
