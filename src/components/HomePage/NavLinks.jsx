import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Menu Button (Visible on sm & md, Hidden on lg) */}
      <button 
        className="lg:hidden text-white text-3xl focus:outline-none" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links (Hidden on sm & md, Visible on lg) */}
      <div className="hidden lg:flex">
        <ul className="flex flex-row space-x-14">
          <li>
            <Link to="/" className="font-poppins text-lg text-white cursor-pointer hover:text-blue-950 font-normal">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="font-poppins text-lg text-white cursor-pointer hover:text-blue-950 font-normal">
              About
            </Link>
          </li>
          <li>
            <Link to="/Events" className="font-poppins text-lg text-white cursor-pointer hover:text-blue-950 font-normal">
              Events
            </Link>
          </li>
          <li>
            <Link to="/Organisation" className="font-poppins text-lg text-white cursor-pointer hover:text-blue-950 font-normal">
              Organisation
            </Link>
          </li>
          <li>
            <Link to="/Log in" className="font-poppins text-lg text-white cursor-pointer hover:text-blue-950 font-normal">
              Log in
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu with Backdrop and Smooth Animation */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-64 h-full bg-gray-900 p-5 shadow-lg transform transition-transform duration-300 ease-in-out">
            {/* Close Button */}
            <button 
              className="text-white text-2xl mb-5 focus:outline-none" 
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link to="/" className="text-white text-lg" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="text-white text-lg" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/Events" className="text-white text-lg" onClick={() => setMenuOpen(false)}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/Organisation" className="text-white text-lg" onClick={() => setMenuOpen(false)}>
                  Organisation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavLinks;
