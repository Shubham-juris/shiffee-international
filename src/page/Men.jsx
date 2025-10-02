import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CurrencyContext } from "../context/CurrencyContext";
import { formatPrice } from "../utils/currency";

import jinss from "../assets/Man/jinss.jpg";
import Jacket from "../assets/Man/Jacket.jpg";
import shirt from "../assets/Man/Shirt.jpg";
import FormalSuit from "../assets/Man/FormalSuit.jpg";
import sneakers from "../assets/Man/sneakers.jpg";
import hodies from "../assets/Man/hodies.jpg";
import bomberJacket from "../assets/Man/image16.jpg";
import poloTshirt from "../assets/Man/image15.jpg";
import chinos from "../assets/Man/image14.jpg";
import runningShorts from "../assets/Man/image10.jpg";
import denimShirt from "../assets/Man/image13.jpg";
import trenchCoat from "../assets/Man/image12.jpg";
import sweatshirt from "../assets/Man/image11.jpg";
import cargoPants from "../assets/Man/image9.jpg";
import tankTop from "../assets/Man/image8.jpg";
import blazer from "../assets/Man/image7.jpg";
const products = [
  {
    id: 1,
    name: "Classic Leather Jacket",
    price: 550,
    image: Jacket,
  },
  {
    id: 2,
    name: "Casual Shirt",
    price: 360,
    image: shirt,
  },
  {
    id: 3,
    name: "Formal Suit",
    price: 2520,
    image: FormalSuit,
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: 799,
    image: jinss,
  },
  {
    id: 5,
    name: "Sports Shoes",
    price: 1100,
    image: sneakers,
  },
  {
    id: 6,
    name: "Hoodie",
    price: 870,
    image: hodies,
  },
  { id: 7, name: "Bomber Jacket", price: 550, image: bomberJacket },
  { id: 8, name: "Polo T-Shirt", price: 250, image: poloTshirt },
  { id: 9, name: "Chinos Pants", price: 800, image: chinos },
  { id: 10, name: "Denim Shirt", price: 600, image: denimShirt },
  { id: 11, name: "Sweatshirt", price: 400, image: runningShorts },
  { id: 12, name: "Running Shorts ", price: 750, image: trenchCoat },
  { id: 13, name: "Trench Coat", price: 3000, image: sweatshirt },
  { id: 14, name: "Cargo Pants", price: 900, image: cargoPants },
  { id: 15, name: "Tank Top", price: 200, image: tankTop },
  { id: 16, name: "Blazer", price: 1200, image: blazer },
];

const Men = () => {
  const navigate = useNavigate();
  const { currency } = useContext(CurrencyContext);

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Banner */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Men’s Collection</h1>
        <p className="text-lg mb-6">
          Discover premium fashion for men – stylish, comfortable and trendy.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
          onClick={() => navigate("/sale")}
        >
          Shop Sale
        </motion.button>
      </motion.div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10 py-5">
          ✨ Trending Now
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
                <p className="text-xl font-bold text-blue-600">
                  {formatPrice(product.price, currency)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-lg p-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4">Exclusive Offer 🎉</h2>
          <p className="text-lg mb-6">
            Buy 2 Get 1 Free on Men’s Clothing – Limited Time Only!
          </p>
          <button
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
            onClick={() => navigate("/new")}
          >
            Grab the Deal
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Men;
