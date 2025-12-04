"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function WorksSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Blogs ",
      subtitle: "(Everythingtalent.ai)",
      description:
        "HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.",
      image: "/worked/myWork.png",
      tags: [
        "#next.js",
        "#react.js",
        "#tailwind.css",
        "#typescript",
        "#shadcn",
        "#BG.IBELINK",
        "#css",
        "#figma",
      ],
      position: "right",
      link: "https://myblogs-website-3uyj.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio",
      subtitle: "(Aman Sharma Portfolio)",
      description:
        "Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and ux designer.",
      image: "/worked/Portfolio_Old.png",
      tags: ["#javscript", "#react.js", "#css", "#figma", "#hooks", "#redux"],
      position: "left",
      link: "https://my-portfolio-ten-gray-82.vercel.app/",
    },
    {
      id: 3,
      title: "Weather App",
      subtitle: "(Tells current weather)",
      description:
        "HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.",
      image: "/worked/Weather_App.png",
      tags: [
        "#react.js",
        "#javascript",
        "#next.js",
        "#tailwind.css",
        "#typescript",
        "#hooks",
        "#redux",
        "#html",
        "#figma",
      ],
      position: "right",
      link: "https://weather-website-dusky-tau.vercel.app/",
    },
    {
      id: 4,
      title: "Login Page",
      subtitle: "(Initial Project)",
      description:
        "Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and ux designer.",
      image: "/worked/Login_page.png",
      tags: [
        "#node.js",
        "#express.js",
        "#mongoDB",
        "#mongoDBAtlas",
        "#ejs",
        "#swiper.js",
      ],
      position: "left",
      link: "https://react-login-form-wheat.vercel.app/",
    },
    {
      id: 5,
      title: "To_Do_List",
      subtitle: "(First Project)",
      description:
        "HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.",
      image: "/worked/ToDo_List.png",
      tags: [
        "#react.js",
        "#express.js",
        "#node.js",
        "#swiper.js",
        "#mongoDB",
        "#mongoose",
        "#css",
        "#javascript",
        "#figma",
      ],
      position: "right",
      link: "https://react-to-do-list-sandy-psi.vercel.app/",
    },
    {
      id: 6,
      title: "Currency Converter",
      subtitle: "(Convert Currency of Every Country)",
      description:
        "Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and ux designer.",
      image: "/worked/Currency_converter.png",
      tags: [
        "#node.js",
        "#express.js",
        "#mongoDB",
        "#mongoDBAtlas",
        "#ejs",
        "#swiper.js",
      ],
      position: "left",
      link: "https://currency-converter-react-pearl.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 py-20 px-4">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="inline-block text-5xl font-bold text-teal-600 border-4 border-teal-600 rounded-2xl px-12 py-4">
          Latest Works
        </h2>
      </div>

      {/* Projects */}
      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col lg:flex-row items-center gap-12 ${
              project.position === "left" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Connector */}
            <div className="hidden lg:flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-6 rounded-full border-4 border-teal-500 bg-white z-10" />
              {index < projects.length - 1 && (
                <div className="w-1 h-32 bg-teal-300" />
              )}
            </div>

            {/* Laptop Mockup */}
            <div
              className={`lg:w-1/2 transition-all duration-500 cursor-pointer ${
                hoveredProject === project.id ? "scale-90 z-20" : "scale-80"
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative">
                {/* Laptop Frame */}
                <div className="h-100 relative bg-gray-900 rounded-t-2xl p-3 shadow-2xl">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 mb-2 px-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="bg-white rounded-lg overflow-hidden">
                    <a href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-92"
                      />
                    </a>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="relative">
                  <div className="h-5 bg-linear-to-b from-gray-800 to-gray-700 rounded-b-xl" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-t-lg" />
                </div>

                {/* Shadow Effect */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-gray-900/20 blur-2xl rounded-full" />
              </div>
            </div>

            {/* Content */}
            <div
              className={`lg:w-1/2 space-y-6 ${
                project.position === "right" ? "lg:pl-20" : "lg:pr-20"
              }`}
            >
              <div>
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-2xl text-orange-400 font-light">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:border-teal-500 hover:text-teal-600 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline Line */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-40 bottom-40 w-1 bg-teal-200 -z-10" />
    </div>
  );
}
