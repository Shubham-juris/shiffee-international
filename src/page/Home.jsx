
import React, { useContext } from "react";
import { motion } from "framer-motion";
import HomeImg1 from "../assets/Home/homeImg1.jpg";
import HomeImg2 from "../assets/Home/homeImg2.jpg";
import HomeImg3 from "../assets/Home/homeImg3.jpg";
import HomeImg4 from "../assets/Home/homeImg4.jpg";
import { CurrencyContext } from "../context/CurrencyContext";
import { formatPrice } from "../utils/currency";

const Home = () => {
  const { currency } = useContext(CurrencyContext);

  const categoryImages = {
    Men: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=800&q=80",
    Women:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80",
    Kids: "https://images.unsplash.com/photo-1503457574462-bd27054394c1?auto=format&fit=crop&w=800&q=80",
    Accessories:
      "https://images.unsplash.com/photo-1585386959984-a4155228a1c2?auto=format&fit=crop&w=800&q=80",
  };

  // Prices in INR (base)
  const featuredProducts = [
    { id: 1, name: "Trendy Outfit 1", price: 999, img: HomeImg1 },
    { id: 2, name: "Trendy Outfit 2", price: 1999, img: HomeImg2 },
    { id: 3, name: "Trendy Outfit 3", price: 2999, img: HomeImg3 },
    { id: 4, name: "Trendy Outfit 4", price: 3999, img: HomeImg4 },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1600&q=80"
            alt="Fashion Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <motion.div
          className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to{" "}
              <span className="text-yellow-400">Shiffee International</span>
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-lg">
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
        </motion.div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.keys(categoryImages).map((cat, index) => (
            <motion.a
              key={cat}
              href={`/${cat.toLowerCase()}`}
              className="relative h-56 rounded-2xl overflow-hidden group shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={categoryImages[cat]}
                alt={cat}
                className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-yellow-400 bg-opacity-40 flex items-center justify-center">
                <span className="text-xl font-bold text-black tracking-wide">
                  {cat}
                </span>
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
            {featuredProducts.map((p, index) => (
              <motion.div
                key={p.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.name}</h3>
                  <p className="text-gray-500">
                    {formatPrice(p.price, currency)}
                  </p>
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
        <h2 className="text-4xl font-bold mb-4">🔥 Mega Sale is Live!</h2>
        <p className="text-lg mb-6">Get up to 50% off on selected items.</p>
        <a
          href="/sale"
          className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
        >
          Shop Sale Now
        </a>
      </motion.section>
    </div>
  );
};

export default Home;
