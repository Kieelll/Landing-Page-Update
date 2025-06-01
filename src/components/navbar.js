import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="z-[100] w-full bg-[#74A16E]/[.82] fixed top-0 left-0 right-0 font-fugazOne font-light text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-8 w-auto sm:h-10" src={logo} alt="GreenConnect Logo" />
            <p className="ml-2 text-sm sm:text-base">GREENCONNECT</p>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="hover:text-gray-200 transition-colors">HOME</Link>
            <Link to="/application" className="hover:text-gray-200 transition-colors">APPLICATION</Link>
            <Link to="/about-us" className="hover:text-gray-200 transition-colors">ABOUT US</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#74A16E]">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#5a8055]"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/application"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#5a8055]"
            onClick={() => setIsMenuOpen(false)}
          >
            APPLICATION
          </Link>
          <Link
            to="/about-us"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#5a8055]"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
