import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            shiffee International
          </h2>
          <p className="mt-3 text-sm">
            Trending fashion, timeless style.shiffee International brings you
            the best in clothing and accessories for Men, Women & Kids.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/sale" className="hover:text-white">
                Sale
              </a>
            </li>
          </ul>
        </div>

        {/* Shop Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/men" className="hover:text-white">
                Men
              </a>
            </li>
            <li>
              <a href="/women" className="hover:text-white">
                Women
              </a>
            </li>
            <li>
              <a href="/kids" className="hover:text-white">
                Kids
              </a>
            </li>
            <li>
              <a href="/accessories" className="hover:text-white">
                Accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for latest trends & offers.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-r-md font-semibold"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FiTwitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FiYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} shiffee International. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
