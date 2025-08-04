import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/project', label: 'Projects' },
    { path: '/hobbies', label: 'My Sandbox' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact Me' }
  ];

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 flex items-center justify-between">
        {/* Logo */}
        <Link to={'/'}>
          <span className="logo">
            <span className="logo-highlight">A</span>nkit <span className="logo-highlight">M</span>alhotra
          </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-all font-roboto ${location.pathname === item.path
                ? 'text-white border-b-2 border-white pb-1'
                : 'text-gray-300 hover:text-white'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-3 bg-black">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-medium font-roboto transition-all ${location.pathname === item.path
                ? 'text-[#fff27d] underline'
                : 'text-gray-200 hover:text-[#fff27d]'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
