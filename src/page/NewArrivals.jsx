import React, { useState } from "react";
import { motion } from "framer-motion";
import MenClassicJacket from "../assets/newArraivals/MenClassicJacket.jpg";
import WomenSummerDress from "../assets/newArraivals/WomenSummerDress.jpg";
import CasualSneakers from "../assets/newArraivals/CasualSneakers.jpg";
import KidsHoodie from "../assets/newArraivals/KidsHoodie.jpg";
import LeatherHandbag from "../assets/newArraivals/LeatherHandbag.jpg";
const products = [
  {
    id: 1,
    name: "Men's Classic Jacket",
    price: "$120",
    image: MenClassicJacket,
    category: "Men",
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: "$90",
    image: WomenSummerDress,
    category: "Women",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: "$70",
    image: CasualSneakers,
    category: "Unisex",
  },
  {
    id: 4,
    name: "Kids Hoodie",
    price: "$50",
    image: KidsHoodie,
    category: "Kids",
  },
  {
    id: 5,
    name: "Leather Handbag",
    price: "$150",
    image: LeatherHandbag,
    category: "Accessories",
  },
];

const NewArrivals = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-gray-50">
      {/* 🔹 Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-800 text-white py-24 text-center">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✨ New Arrivals
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Discover the latest trends and exclusive pieces, curated just for you.
        </motion.p>
      </section>

      {/* 🔹 Filters */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["All", "Men", "Women", "Kids", "Accessories"].map((filter, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(filter)}
              className={`px-6 py-2 rounded-full transition ${
                selectedCategory === filter
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black hover:bg-black hover:text-white"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* 🔹 Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                  New
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-xl font-bold mt-2">{product.price}</p>
                <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NewArrivals;
