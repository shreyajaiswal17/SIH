import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, Home, Info, Layers, CheckCircle, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="glass-card py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold gradient-text">Lumina</h1>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" to="/">
            <Home className="inline-block mr-1 h-4 w-4" />
            Home
          </Link>
          <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" to="/pricing">
            Pricing
          </Link>
          <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#integrations">
            <Layers className="inline-block mr-1 h-4 w-4" />
            Integrations
          </a>
          <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#about-section">
            <Info className="inline-block mr-1 h-4 w-4" />
            About
          </a>
          <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#feasability">
            <CheckCircle className="inline-block mr-1 h-4 w-4" />
            Feasibility
          </a>
          <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" to="/login">
            <LogIn className="inline-block mr-1 h-4 w-4" />
            Sign In
          </Link>
          <Link className="gradient-button text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg" to="/signup">
            <UserPlus className="inline-block mr-1 h-4 w-4" />
            Sign Up
          </Link>
          <Link className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors" to="/try-free">
            Try for Free
          </Link>
          <Link className="gradient-button text-white px-4 py-2 rounded-md text-sm font-medium shadow-lg" to="/signup">
            Request Demo
          </Link>
          <a href="tel:+1234567890" className="text-gray-300 hover:text-white px-3 py-2 rounded-full">
            <Phone className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-gray-900 p-4 shadow-lg rounded-b-lg">
            <div className="flex flex-col space-y-2">
              <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">
                <Home className="inline-block mr-2 h-4 w-4" />
                Home
              </Link>
              <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/pricing">
                Pricing
              </Link>
              <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#integrations">
                <Layers className="inline-block mr-2 h-4 w-4" />
                Integrations
              </a>
              <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#about-section">
                <Info className="inline-block mr-2 h-4 w-4" />
                About
              </a>
              <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#feasability">
                <CheckCircle className="inline-block mr-2 h-4 w-4" />
                Feasibility
              </a>
              <Link className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/login">
                <LogIn className="inline-block mr-2 h-4 w-4" />
                Sign In
              </Link>
              <Link className="gradient-button text-white px-4 py-2 rounded-md text-sm font-medium text-center" to="/signup">
                <UserPlus className="inline-block mr-2 h-4 w-4" />
                Sign Up
              </Link>
              <Link className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md text-sm font-medium text-center" to="/try-free">
                Try for Free
              </Link>
              <Link className="gradient-button text-white px-4 py-2 rounded-md text-sm font-medium text-center" to="/signup">
                Request Demo
              </Link>
              <a href="tel:+1234567890" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
