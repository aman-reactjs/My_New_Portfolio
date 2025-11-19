"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
// import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Products",
    "Solutions",
    "Pricing",
    "Blog",
    "Support",
    "About",
  ];

  return (
    <nav className="w-full bg-transparent py-1 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center justify-between w-full md:w-[600px] bg-[#ebedf0] dark:bg-[#0e1218] px-4 md:px-6 py-1 rounded-[12px] shadow border-gray-400 dark:border-gray-700 border-2">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="pr-4 border-r border-gray-300 dark:border-gray-600">
              {/* <Image
                src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=48&q=75"
                alt="Logo"
                width="48"
                height="48"
                className="h-9 w-auto"
              /> */}
            </div>

            {/* Desktop Links */}
            <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-700 dark:text-white">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className={`hover:text-purple-500 transition ${
                    link === "Blog" ? "text-fuchsia-600 font-semibold" : ""
                  }`}
                >
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 px-4">
          <ul className="flex flex-col space-y-3 bg-[#f2f5fb] dark:bg-[#1f2937] p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-white shadow">
            {navLinks.map((link) => (
              <li
                key={link}
                className={`hover:text-purple-500 transition ${
                  link === "Blog" ? "text-fuchsia-600 font-semibold" : ""
                }`}
              >
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
