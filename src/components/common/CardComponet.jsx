import React from "react";
import { motion } from "framer-motion";

const CardComponet = () => {
  // Example data (baad me Context ya Redux se aayega)
  const cartItems = [
    {
      id: 1,
      name: "Men's Jacket",
      price: 120,
      image: "https://via.placeholder.com/100",
      qty: 1,
    },
    {
      id: 2,
      name: "Women's Dress",
      price: 90,
      image: "https://via.placeholder.com/100",
      qty: 2,
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <motion.h1
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🛒 Your Shopping Cart
      </motion.h1>

      {/* Cart Items */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />

                {/* Info */}
                <div className="flex-1 px-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price} x {item.qty}
                  </p>
                </div>

                {/* Remove Button */}
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                  Remove
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="mt-8 text-right">
            <p className="text-xl font-semibold">Total: ${total}</p>
            <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardComponet;
