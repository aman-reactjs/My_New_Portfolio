"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function AdvancedFooter() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! How can I help you today? 👋" },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        { type: "user", text: inputMessage },
        {
          type: "bot",
          text: "Thanks for your message! Our team will get back to you soon. 🚀",
        },
      ]);
      setInputMessage("");
    }
  };

  return (
    <section id="footer">
      <footer className="bg-linear-to-br from-gray-50 via-purple-50 to-pink-50 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div> */}
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Company Info */}
            <div className="space-y-4 sm:space-y-6 max-w-2xl">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="flex gap-0.5 sm:gap-1">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  My Portfolio
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                Passionate developer creating amazing digital experiences with
                modern technologies. Let&apos;s build something great together!
              </p>

              {/* Resume Download Button */}
              <div className="flex justify-center pt-2">
                <a href="/resume.pdf" download="Aman-Sharma-Resume.pdf">
                  <Button className="group relative px-8 py-6 bg-linear-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Download Resume</span>
                  </Button>
                </a>
              </div>

              {/* Social Links with Icons */}
              <div className="flex gap-4 sm:gap-5 justify-center flex-wrap">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/aman.vashishtha.9843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-blue-700 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-blue-700"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/aman_vashishtha_01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-linear-to-tr hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-pink-600"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aman-sharma-152897332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-blue-600 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-blue-600"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@AMANVLGS12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-red-600 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-red-600"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/aman-reactjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-gray-700 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-gray-700"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
              <div className="flex-1 w-full lg:w-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-400 mb-2">
                  Stay Updated
                </h3>
                <p className="text-sm sm:text-base text-gray-500">
                  Subscribe to my newsletter for the latest updates and
                  insights.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 sm:flex-none w-full sm:w-64 lg:w-80 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 border border-gray/100 rounded-full text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
                />
                <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-linear-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-lg font-semibold text-sm sm:text-base transition-all shadow-lg hover:shadow-purple-500/50 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left order-3 sm:order-1">
                © 2024 Aman Sharma. All rights reserved.
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 order-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
                >
                  Cookie Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap"
                >
                  Sitemap
                </a>
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-2 order-1 sm:order-3">
                <span className="text-gray-400 text-sm sm:text-base">🌐</span>
                <select className="bg-transparent text-gray-400 text-xs sm:text-sm border-none focus:outline-none cursor-pointer">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-linear-to-r from-purple-600 via-pink-600 to-purple-600" />

        {/* Floating Chat Bot */}
        <div className="fixed bottom-6 right-6 z-50">
          {/* Chat Window */}
          {isChatOpen && (
            <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
              {/* Chat Header */}
              <div className="bg-linear-to-r from-purple-600 to-pink-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Support Bot</h3>
                    <p className="text-xs text-white/80">
                      We are here to help!
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto bg-gray-50 p-4 space-y-3">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                        msg.type === "user"
                          ? "bg-linear-to-r from-purple-600 to-pink-600 text-white"
                          : "bg-white text-gray-800 shadow-sm"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="w-10 h-10 bg-linear-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <span className="text-white text-xl">➤</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Chat Button */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-purple-500/50"
          >
            {isChatOpen ? (
              <span className="text-2xl sm:text-3xl text-white">✕</span>
            ) : (
              <span className="text-2xl sm:text-3xl text-white">💬</span>
            )}
          </button>

          {/* Notification Badge */}
          {!isChatOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
              1
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideUp {
            animation: slideUp 0.3s ease-out;
          }
        `}</style>
      </footer>
    </section>
  );
}
