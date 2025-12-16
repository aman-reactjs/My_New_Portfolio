"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavLink {
  name: string;
  highlight?: boolean;
  ref: string;
}

const Navbar: React.FC<{ openAboutPopup: () => void }> = ({
  openAboutPopup,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // 🔥 30% is best
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", ref: "#home" },
    { name: "Projects", ref: "#projects" },
    { name: "Contact", ref: "#contact" },
    { name: "Resume", ref: "#footer" },
    { name: "About", ref: "#about" },
  ];

  // const handleLinkClick = (): void => {
  //   setIsMobileMenuOpen(false);
  // };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-0">
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
                // smooth={true}
                // duration={600}
                // onClick={handleLinkClick}
                href={link.ref}
                key={link.name}
                onClick={(e) => {
                  if (link.name === "About") {
                    e.preventDefault();
                    setActiveSection("about");
                    // 1️⃣ Scroll to Home Section
                    const homeSection = document.querySelector("#home");
                    homeSection?.scrollIntoView({ behavior: "smooth" });

                    // 2️⃣ Popup open AFTER scroll ends
                    setTimeout(() => {
                      openAboutPopup();
                    }, 600); // scrolling duration
                  }
                }}
                // spy={true}
                // offset={-70}

                className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative group 
                   ${
                     activeSection === link.ref.replace("#", "")
                       ? "text-white cursor-default"
                       : "text-gray-300 hover:text-purple-600"
                   }
                          `}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-0.5  ${
                    activeSection === link.ref.replace("#", "")
                      ? "w-full bg-linear-to-r from-fuchsia-500 via-purple-500 to-purple-500 transition-all duration-300" // Active → underline stay
                      : "w-0 group-hover:w-full" // Hover → animate
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors cursor-pointer"
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
              href={link.ref}
              onClick={(e) => {
                if (link.name === "About") {
                  e.preventDefault();

                  // 1️⃣ Scroll to Home Section
                  const homeSection = document.querySelector("#home");
                  homeSection?.scrollIntoView({ behavior: "smooth" });

                  // 2️⃣ Popup open AFTER scroll ends
                  setTimeout(() => {
                    openAboutPopup();
                  }, 600); // scrolling duration
                }
              }}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                activeSection === link.ref.replace("#", "")
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
