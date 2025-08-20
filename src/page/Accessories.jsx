import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Necklace from "../assets/accessories/Necklace.jpg";
import HandbagMan from "../assets/accessories/HandbagMan.jpg";
import Hat from "../assets/accessories/Hat.jpg";
import Watch from "../assets/accessories/Watch.jpg";
import Belt from "../assets/accessories/Belt.jpg";
import Sunglasses from "../assets/accessories/Sunglasses.jpg";
import { formatPrice } from "../utils/currency";
import { CurrencyContext } from "../context/CurrencyContext";

const accessories = [
  {
    id: 1,
    name: "Classic Sunglasses",
    price: 35, 
    image: Sunglasses,
  },
  {
    id: 2,
    name: "Leather Belt",
    price: 45,
    image: Belt,
  },
  {
    id: 3,
    name: "Wrist Watch",
    price: 120,
    image: Watch,
  },
  {
    id: 4,
    name: "Stylish Hat",
    price: 30,
    image: Hat,
  },
  {
    id: 5,
    name: "Handbag",
    price: 75,
    image: HandbagMan,
  },
  {
    id: 6,
    name: "Necklace",
    price: 55,
    image: Necklace,
  },
];

const Accessories = () => {
  const navigate = useNavigate();
  const { currency } = useContext(CurrencyContext);

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-green-400 to-emerald-600 text-white py-20 px-6 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Accessories</h1>
        <p className="text-lg mb-6">
          Complete your look with stylish and trendy accessories ✨
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition"
          onClick={() => navigate("/sale")}
        >
          Shop Sale
        </motion.button>
      </motion.div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-10 py-5">
          👜 Latest Accessories
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {accessories.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                {/* 👇 Dynamic currency format */}
                <p className="text-xl font-bold text-green-600">
                  {formatPrice(item.price, currency)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Special Accessories Deal */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          className="bg-gradient-to-r from-emerald-600 to-green-400 text-white rounded-xl shadow-lg p-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            🎁 Special Accessories Deal
          </h2>
          <p className="text-lg mb-6">
            Buy 2 accessories and get 1 free – Limited Time Offer!
          </p>
          <button
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition"
            onClick={() => navigate("/new")}
          >
            Shop Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Accessories;
