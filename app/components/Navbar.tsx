"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavLink {
  name: string;
  href: string;
  highlight?: boolean;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", href: "#home", highlight: true },
    { name: "Products", href: "#products" },
    { name: "Resume", href: "#resume" },
    { name: "Content", href: "#content" },
    { name: "Blog", href: "#blog" },
    { name: "Support", href: "#support" },
    { name: "About", href: "#about" },
  ];

  const handleLinkClick = (): void => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="shrink-0 z-50 ">
            <a href="./" className="block">
              <Image
                src="/my_logo/Aman_logo2.png"
                alt="Aman Logo"
                width={600}
                height={400}
                className="h-20 w-auto sm:h-30 lg:h-40 object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link: NavLink) => (
              <a
                key={link.name}
                href={link.href}
                className={
                  "px-4 py-2 text-sm font-medium transition-all duration-300 relative group text-gray-300 hover:text-white"
                }
              >
                {link.name}
                {/* <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r transition-all duration-300 ${
                    link.highlight
                      ? "from-fuchsia-500 to-purple-500 w-full"
                      : "from-cyan-400 to-blue-500 w-0 group-hover:w-full"
                  }`}
                ></span> */}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r via-fuchsia-500 to-purple-500 transition-all duration-300 ${
                    link.highlight
                      ? "w-full" // active link: full underline
                      : "w-0 group-hover:w-full" // inactive link: expand on hover
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 right-0 w-64 h-screen bg-gray-900/98 backdrop-blur-lg shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4 py-6 space-y-1">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                link.highlight
                  ? "text-fuchsia-500 bg-fuchsia-500/10 font-semibold"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
