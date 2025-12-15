"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Project() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Blogs ",
      subtitle: "(Everythingtalent.ai)",
      description:
        "Everything Talent is my learning blog where I share easy front-end tutorials, interview questions, coding logic, UI tips, and practical examples to help beginners learn faster.",
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
      link: "https://myblogs-website-3uyj.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio",
      subtitle: "(Aman Sharma Portfolio)",
      description:
        "My portfolio is a simple showcase of my early front-end journey, featuring basic UI designs, small projects, and my initial skills in HTML, CSS, and JavaScript. It highlighted my learning progress and served as the foundation for the modern, advanced portfolio I have today.",
      image: "/worked/Portfolio_Old.png",
      tags: ["#javscript", "#react.js", "#css", "#figma", "#hooks", "#redux"],
      link: "https://my-portfolio-ten-gray-82.vercel.app/",
    },
    {
      id: 3,
      title: "Weather App",
      subtitle: "(Tells current weather)",
      description:
        "A simple weather application that fetches real-time weather data using an API and displays temperature, humidity, location details, and conditions with a clean, user-friendly UI.",
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
      link: "https://weather-website-dusky-tau.vercel.app/",
    },
    {
      id: 4,
      title: "Login Page",
      subtitle: "(Initial Project)",
      description:
        "A secure and user-friendly login page allowing users to sign in efficiently, with clean design and responsive layout.",
      image: "/worked/Login_page.png",
      tags: [
        "#node.js",
        "#express.js",
        "#mongoDB",
        "#mongoDBAtlas",
        "#ejs",
        "#swiper.js",
      ],
      link: "https://react-login-form-wheat.vercel.app/",
    },
    {
      id: 5,
      title: "To_Do_List",
      subtitle: "(First Project)",
      description:
        "A simple and interactive To-Do List app to add, manage, and delete tasks efficiently with a clean, responsive design.",
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
      link: "https://react-to-do-list-sandy-psi.vercel.app/",
    },
    {
      id: 6,
      title: "Currency Converter",
      subtitle: "(Convert Currency of Every Country)",
      description:
        "A fast and easy currency converter that converts between multiple currencies in real-time with a simple, user-friendly interface.",
      image: "/worked/Currency_converter.png",
      tags: [
        "#node.js",
        "#express.js",
        "#mongoDB",
        "#mongoDBAtlas",
        "#ejs",
        "#swiper.js",
      ],
      link: "https://currency-converter-react-pearl.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-linear-to-br from-gray-50 via-purple-50 to-pink-50 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-7xl font-bold text-gray-900 mb-4">
            Featured <span className="text-cyan-600">Work</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore my latest projects and creations
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Project List */}
          <div className="lg:col-span-4 space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeProject === index
                    ? "bg-cyan-50 border-cyan-600 shadow-lg shadow-cyan-200"
                    : "bg-gray-50 border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`text-4xl font-black ${
                      activeProject === index
                        ? "text-cyan-600"
                        : "text-gray-300"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        activeProject === index
                          ? "text-gray-900"
                          : "text-gray-500"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  </div>
                  {activeProject === index && (
                    <div className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Project Details */}
          <div className="lg:col-span-8">
            <div className="sticky top-8">
              {/* Main Image */}
              <div className="relative mb-8 group">
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
                  <Image
                    width={400}
                    height={400}
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>

                  {/* Floating Info Badge */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-200 shadow-lg">
                    <p className="text-cyan-600 font-mono text-sm font-semibold">
                      Project {String(activeProject + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-lg">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {projects[activeProject].title}
                </h2>
                <p className="text-cyan-600 text-lg mb-6 font-medium">
                  {projects[activeProject].subtitle}
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {projects[activeProject].description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-mono border border-gray-300 hover:border-cyan-500 hover:text-cyan-600 hover:shadow-md transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={projects[activeProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span>View Live Project</span>
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <button className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 shadow-md hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
