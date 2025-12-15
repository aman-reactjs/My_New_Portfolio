"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

type AboutProps = {
  onClose: () => void;
};

export default function About({ onClose }: AboutProps) {
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Handle Outside Click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose(); // Close popup when clicking outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <section id="about">
      <div
        className="
          fixed -top-100 -left-51 text-center
          bg-black backdrop-blur-sm
          z-999
          flex items-center justify-center
          w-100 h-200

          md:absolute md:backdrop-blur-sm
          md:-top-80 md:-left-102 md:w-318 md:h-150

          lg:-top-102 lg:-left-48
        "
      >
        {/* Popup Box */}
        <div
          ref={popupRef}
          className="text-white rounded-xl w-[85%] h-[85%] p-10 overflow-y-auto flex gap-10 relative animate-slideUp z-1000"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
          >
            ✕
          </button>

          {/* Left Section */}
          <div className="w-1/2 overflow-hidden">
            <h1 className="text-3xl font-bold text-cyan-400 mb-2">ABOUT ME</h1>

            <p className="text-gray-300 leading-7 my-4 sm:leading-10 sm:my-10">
              I help business owners and busy web developers to design & develop
              creative websites that fit their vision and attract visitors.
              Technologies and tools that I use to create such awesome websites.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {[
                "javascript",
                "react.js",
                "redux",
                "node.js",
                "express.js",
                "mongodb",
                "mongoose",
                "tailwind",
                "git",
                "github",
                "html",
                "css",
                "figma",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  #{item}
                </span>
              ))}
            </div>

            <h2 className="mt-10 text-2xl text-cyan-400 font-bold">
              FRONT-END DEVELOPER
            </h2>

            {/* Download Resume */}
            <a href="/resume.pdf" download="Aman-Sharma-Resume.pdf">
              <Button
                variant="outline"
                className="w-40 h-10 my-15 rounded-sm bg-blue-500"
              >
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
