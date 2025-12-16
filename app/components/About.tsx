"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Download } from "lucide-react";

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
          fixed -top-105 -left-53
          bg-black backdrop-blur-sm
          z-999
          flex items-center justify-center
          w-180 h-160 

          md:absolute md:backdrop-blur-sm
          md:-top-87 md:-left-100 md:w-321 md:h-215

          lg:-top-110 lg:-left-48 lg:w-318 lg:h-155
        "
      >
        {/* Popup Box */}
        <div
          ref={popupRef}
          className="text-white rounded-xl w-[85%] h-[85%] lg:p-5 md:p-8  overflow-y-auto flex gap-10 relative animate-slideUp z-1000"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 hover:bg-red-500/20 transition-all duration-300"
          >
            <X className="w-5 h-5 hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Left Section */}
          <div className="w-1/2 overflow-hidden">
            <h1 className="text-3xl font-bold text-cyan-400 mb-2">ABOUT ME</h1>

            <p className="text-gray-300 leading-5 my-4  sm:my-4">
              I am a Front-End Developer with hands-on experience in HTML, CSS,
              JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Redux,
              Git, and GitHub. I am passionate about creating responsive,
              scalable, and visually appealing web applications, focusing on
              performance, accessibility, and modern UI/UX best practices.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript",
                "React.js",
                "Redux",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Shadcn/UI",
                "REST API",
                "Git",
                "GitHub",
                "HTML",
                "CSS",
                "Figma",
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="group relative overflow-hidden
                 bg-slate-800/50 hover:bg-slate-700/50
                 border border-slate-700 hover:border-cyan-500/50
                 rounded-lg px-4 py-2
                 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10 text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
                    {skill}
                  </span>

                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg
                      bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>

            <h2 className="md:mt-10 mt-5 text-2xl text-cyan-400 font-bold">
              FRONT-END DEVELOPER
            </h2>

            {/* Download Resume */}
            <a href="/resume.pdf" download="Aman-Sharma-Resume.pdf">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-6 rounded-lg shadow-md hover:shadow-cyan-500/50 transition-all duration-300 group md:my-10 my-5">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
