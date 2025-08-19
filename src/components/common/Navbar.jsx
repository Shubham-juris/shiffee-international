import React, { useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          shiffee <span className="text-yellow-400">International</span>
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

        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <FiShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
              2
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/" className="py-2 border-b">
              Home
            </Link>
            <Link to="/new" className="py-2 border-b">
              New Arrivals
            </Link>
            <Link to="/sale" className="py-2 border-b">
              Sale
            </Link>
            <Link to="/men" className="py-2 border-b">
              Men
            </Link>
            <Link to="/women" className="py-2 border-b">
              Women
            </Link>
            <Link to="/kids" className="py-2 border-b">
              Kids
            </Link>
            <Link to="/accessories" className="py-2 border-b">
              Accessories
            </Link>
            <Link to="/about" className="py-2 border-b">
              About
            </Link>
            <Link to="/contact" className="py-2 border-b">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
