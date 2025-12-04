"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Bubble = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
};

export default function Home() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Create new bubble
      const newBubble = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 30 + 10,
        delay: Math.random() * 0.5,
      };

      setBubbles((prev) => [...prev, newBubble]);

      // Remove bubble after animation
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-linear-to-br from-gray-900 via-gray-900 to-gray-900 overflow-hidden">
      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm border border-white/90 pointer-events-none animate-float"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            transform: "translate(-50%, -50%)",
            animationDelay: `${bubble.delay}s`,
            boxShadow:
              "0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.2)",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative mt-5 min-h-screen text-white py-5 ">
        <Navbar />
        <div className="w-12 h-100 absolute right-10 top-25">
          <div className=" hidden md:grid sm:grid gap-4 sm:gap-5 justify-center flex-wrap ">
            {/* Twitter/X */}
            <a
              href="#"
              className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-blue-500 rounded-full transition-all duration-300 backdrop-blur-sm border border-white hover:border-blue-500"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aman-sharma-152897332/"
              target="_black"
              className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-blue-600 rounded-full transition-all duration-300 backdrop-blur-sm border border-white hover:border-blue-600"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/aman.vashishtha.9843"
              target="_black"
              className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-blue-700 rounded-full transition-all duration-300 backdrop-blur-sm border border-white hover:border-blue-700"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aman_vashishtha_01/"
              target="_black"
              className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-linear-to-tr hover:from-purple-600 hover:to-pink-600 rounded-full transition-all duration-300 backdrop-blur-sm border border-white hover:border-pink-600"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@AMANVLGS12"
              target="_black"
              className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-red-600 rounded-full transition-all duration-300 backdrop-blur-sm border border-white hover:border-red-600"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/aman-reactjs"
              target="_black"
              className="group w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-white/10 hover:bg-gray-700 rounded-full transition-all duration-300 backdrop-blur-sm border border-white hover:border-gray-700"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-30 justify-around items-left px-1 sm:px-12 lg:px-12 py-30">
          {/* LEFT TEXT SECTION */}
          <div className="w-full lg:w-120 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4cdbxl sm:text-4xl md:text-4xl font-black">
              Hi, I&#39;m Aman Sharma
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-sky-600 mt-2">
              Frontend Developer
            </h2>

            <p className="py-5 text-gray-300 leading-relaxed text-sm sm:text-base">
              I am Aman Sharma, a passionate Front-End Developer with a keen eye
              for creating responsive, user-friendly, and visually appealing web
              applications. I specialize in HTML, CSS, JavaScript, and React.js,
              ensuring seamless user experiences with modern UI/UX principles.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 justify-center lg:justify-start mt-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amanvashishtha606@gmail.com"
                target="_blank"
              >
                <Button
                  variant="outline"
                  className="border-2 rounded-md border-blue-800 px-6 py-4 bg-blue-800 text-white font-semibold"
                >
                  Hire Me
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/aman-sharma-152897332/"
                target="_black"
              >
                <Button
                  variant="outline"
                  className="border-2 text-black hover:text-orange-400 rounded-md border-blue-800 px-6 py-4 font-semibold"
                >
                  Let&#39;s Talk
                </Button>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="w-full lg:w-96 flex justify-center lg:justify-end ">
            <Image
              src="/my_logo/My_Image.png"
              alt="Aman Sharma"
              width={600}
              height={400}
              className="w-52 h-100 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover shadow-lg rounded-b-full rounded-t-full "
            />
          </div>
        </div>

        {/* Cursor follower */}
        <div
          className="fixed w-4 h-4 bg-white/50 rounded-full pointer-events-none blur-sm transition-all duration-100"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(-50%, -50%) translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translateY(-200px) scale(0);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
