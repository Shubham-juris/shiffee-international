import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ElegarntEveningGown from "../assets/woman/ElegantEveningGown.jpg";
import SummerFloralDress from "../assets/woman/Summer Floral Dress.jpg";
import Tops from "../assets/woman/TopGirls.jpg";
import Handbag from "../assets/woman/Handbag.jpg";
import Heels from "../assets/woman/Heels.jpg";
import Saree from "../assets/woman/Saree.jpg";

const products = [
  {
    id: 1,
    name: "Elegant Evening Gown",
    price: "$250",
    image: ElegarntEveningGown,
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: "$120",
    image: SummerFloralDress,
  },
  {
    id: 3,
    name: "Casual Tops",
    price: "$60",
    image: Tops,
  },
  {
    id: 4,
    name: "Designer Handbag",
    price: "$180",
    image: Handbag,
  },
  {
    id: 5,
    name: "High Heels",
    price: "$90",
    image: Heels,
  },
  {
    id: 6,
    name: "Stylish Saree",
    price: "$140",
    image: Saree,
  },
];

const Women = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-pink-50 min-h-screen">
      {/* Hero Banner */}
      <motion.div
        className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-20 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Women’s Collection</h1>
        <p className="text-lg mb-6">
          Fashion that speaks elegance, beauty, and style for every woman.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
          onClick={() => navigate("/sale")}
        >
          Shop Sale
        </motion.button>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mt-10 mb-8">
        {["All", "Dresses", "Tops", "Handbags", "Shoes", "Sarees"].map(
          (category) => (
            <button
              key={category}
              className="px-5 py-2 bg-white rounded-full shadow hover:bg-pink-100 transition"
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          💃 Trending Styles
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
                <p className="text-xl font-bold text-pink-600">
                  {product.price}
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

      {/* Special Offers */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          className="bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-xl shadow-lg p-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4">Special Offer 🌸</h2>
          <p className="text-lg mb-6">
            Buy 1 Get 1 Free on selected Women’s Collection – Limited Time!
          </p>
          <button
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
            onClick={() => navigate("/cart")}
          >
            Grab the Deal
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Women;
