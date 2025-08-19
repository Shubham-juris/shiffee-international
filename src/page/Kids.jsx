import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TShirt from "../assets/kids/T-Shirt.jpg";
import Hoodie from "../assets/kids/Hoodie.jpg";
import jacketKet from "../assets/kids/jacketKet.jpg";
import Shorts from "../assets/kids/Shorts.jpg";
import Skirt from "../assets/kids/Skirt.jpg";
import Shoes from "../assets/kids/Shoes.jpg";
const products = [
  {
    id: 1,
    name: "Cartoon Print T-Shirt",
    price: "$25",
    image: TShirt,
  },
  {
    id: 2,
    name: "Colorful Hoodie",
    price: "$40",
    image: Hoodie,
  },
  {
    id: 3,
    name: "Kids Denim Jacket",
    price: "$55",
    image: jacketKet,
  },
  {
    id: 4,
    name: "Comfy Shorts",
    price: "$20",
    image: Shorts,
  },
  {
    id: 5,
    name: "Cute Skirt",
    price: "$30",
    image: Skirt,
  },
  {
    id: 6,
    name: "Sports Shoes",
    price: "$45",
    image: Shoes,
  },
];

const Kids = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-yellow-50 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-20 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Kids' Collection</h1>
        <p className="text-lg mb-6">
          Trendy, comfy and colorful outfits for the little ones 👶✨
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition"
          onClick={() => navigate("/sale")}
        >
          Explore Sale
        </motion.button>
      </motion.div>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mt-10 mb-8 flex-wrap">
        {["All", "T-Shirts", "Hoodies", "Jackets", "Shorts", "Shoes"].map(
          (category) => (
            <button
              key={category}
              className="px-5 py-2 bg-white rounded-full shadow hover:bg-yellow-100 transition"
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          🧒 Latest Kids Fashion
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-xl font-bold text-yellow-600">
                  {product.price}
                </p>
                <button
                  className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                  onClick={() => navigate("/cart")}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Special Kids Offer */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-xl shadow-lg p-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4">🎁 Special Kids Deal</h2>
          <p className="text-lg mb-6">
            Flat 30% Off on Kids Wear – Brighten your little one’s wardrobe
            today!
          </p>
          <button
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition"
            onClick={() => navigate("/cart")}
          >
            Shop Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Kids;
