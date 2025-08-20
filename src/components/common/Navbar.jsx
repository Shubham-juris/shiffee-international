import React, { useContext, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CurrencyContext } from "../../context/CurrencyContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          Shiffee <span className="text-yellow-400">International</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-black text-gray-700">
            Home
          </Link>
          <Link to="/new" className="hover:text-black text-gray-700">
            New Arrivals
          </Link>
          <Link to="/sale" className="hover:text-black text-gray-700">
            Sale
          </Link>
          <Link to="/men" className="hover:text-black text-gray-700">
            Men
          </Link>
          <Link to="/women" className="hover:text-black text-gray-700">
            Women
          </Link>
          <Link to="/kids" className="hover:text-black text-gray-700">
            Kids
          </Link>
          <Link to="/accessories" className="hover:text-black text-gray-700">
            Accessories
          </Link>
          <Link to="/about" className="hover:text-black text-gray-700">
            About
          </Link>
          <Link to="/contact" className="hover:text-black text-gray-700">
            Contact
          </Link>
        </nav>

        {/* Right: Currency + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
          >
            <option value="INR">🇮🇳 India (₹)</option>
            <option value="USD">🇬🇧 England/US ($)</option>
          </select>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b"
            >
              Home
            </Link>
            <Link
              to="/new"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b"
            >
              New Arrivals
            </Link>
            <Link
              to="/sale"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b"
            >
              Sale
            </Link>
            <Link
              to="/men"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b"
            >
              Men
            </Link>
            <Link
              to="/women"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b"
            >
              Women
            </Link>
            <Link
              to="/kids"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b"
            >
              Kids
            </Link>
            <Link
              to="/accessories"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b"
            >
              Accessories
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="py-2 border-b"
            >
              Contact
            </Link>

            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="mt-3 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
            >
              <option value="INR">🇮🇳 India (₹)</option>
              <option value="USD">🇬🇧 England/US ($)</option>
            </select>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
