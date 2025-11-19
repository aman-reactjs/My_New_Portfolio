"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [bubbles, setBubbles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
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
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 overflow-hidden">
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
      <div className="relative mt-5 min-h-screen text-white px-4">
        <Navbar />

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
