import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import kids from "../assets/sale/kids.jpg";
import Leather from "../assets/sale/Leather.jpg";
import Casual from "../assets/sale/Casual.jpg";
import Summer from "../assets/sale/Summer.jpg";

const products = [
  {
    id: 1,
    name: "Men's Leather Jacket",
    price: "$150",
    salePrice: "$99",
    image: Leather,
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: "$90",
    salePrice: "$59",
    image: Summer,
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: "$120",
    salePrice: "$79",
    image: Casual,
  },
  {
    id: 4,
    name: "Kids Hoodie",
    price: "$60",
    salePrice: "$39",
    image: kids,
  },
];

const Sale = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-red-50 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-red-500 to-red-700 text-white py-20 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">🔥 Mega Sale is Live!</h1>
        <p className="text-lg mb-6">
          Get up to <span className="font-bold text-yellow-300">70% OFF</span>{" "}
          on trending fashion.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
          onClick={() => navigate("/new-arrivals")}
        >
          Shop Now
        </motion.button>
      </motion.div>

      {/* Offers Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-bold text-red-600 mb-2">
              Flat 50% Off
            </h2>
            <p className="text-gray-600 mb-4">On Men's Collection</p>
            <button
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => navigate("/men")}
            >
              Explore Deals
            </button>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-bold text-red-600 mb-2">
              Buy 1 Get 1
            </h2>
            <p className="text-gray-600 mb-4">On Women's Collection</p>
            <button
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => navigate("/women")}
            >
              Grab Offer
            </button>
          </motion.div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10">🔥 Hot Deals</h2>
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
                <p className="text-gray-500 line-through">{product.price}</p>
                <p className="text-xl font-bold text-red-600">
                  {product.salePrice}
                </p>
                <button
                  className="mt-3 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                  onClick={() => navigate("/cart")}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
