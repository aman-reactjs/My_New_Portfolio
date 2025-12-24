"use client";
import React from "react";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumePopup: React.FC<ResumePopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      {/* Popup */}
      <div
        className="relative w-[95%] max-w-7xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl p-6 md:p-8 mt-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-red-500/20 transition-all duration-300"
        >
          <X className="w-5 h-5 hover:rotate-90 transition-transform duration-300" />
        </button>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Aman Sharma</h1>
          <p className="text-gray-600 mt-1">
            Front-End Developer | Web Developer | React/Next.js Developer
          </p>
          <p className="text-sm text-gray-500 mt-1">
            📍 India • ✉️{" "}
            <a href="mailto:amanvashishtha606@gmail.com" target="_black">
              amanvashishtha606@gmail.com
            </a>
            • 🌐{" "}
            <a
              href="https://my-new-portfolio-tau-cyan.vercel.app/"
              target="_black"
            >
              Portfolio
            </a>
          </p>
        </div>

        {/* Summary */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Detail-oriented and creative Front-End Developer with a passion for
            building responsive and user-friendly web interfaces using modern
            technologies like React.js, Next.js, TypeScript, Tailwind CSS,
            HTML5, CSS3, and JavaScript. Seeking to contribute technical
            expertise and innovative ideas in a collaborative development team.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Next.js",
              "Redux",
              "TypeScript",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "REST APIs",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <strong>Everythingtalent.ai:</strong> Contributed to the Home,
              Product, Pricing, and Blog pages, focusing on UI/UX design, layout
              optimization, and responsive development to enhance overall user
              experience.
            </li>
            <li>
              <strong>Portfolio Website:</strong> I create modern, responsive,
              and high-performance web interfaces using React.js, Next.js,
              TypeScript,Tailwind CSS and Shadcn/ui .
            </li>
            <li>
              <strong>Blog Website:</strong> Built responsive blog website using
              TypeScript, Tailwind CSS, and Next.js.
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold mb-2">Experience</h2>
          <p className="text-gray-700">
            <a
              href="https://www.codersboutique.com/"
              target="_black"
              className="text-blue-700"
            >
              Coders boutique
            </a>
            : <b>Frontend Developer (React.js/Next.js Developer)</b>
          </p>
        </section>

        {/* {Education} */}

        <section className="mb-5">
          <h2 className="text-lg font-semibold mb-2">Education</h2>
          <p>
            <b>✓ 10Th – UP Board (2018 – 2019) Marks: 531/600 </b>
          </p>
          <p>
            <b>✓ 12Th – UP Board (2020 – 2021) Marks: 335/500 </b>
          </p>
          <p>
            <b>
              ✓ Bachelor of Science (Mathematics) – Dr. Bhim Rao Ambedker
              University, Agra ( 2021 – 2024 | Agra, UP) CGPA: 7.45/10{" "}
            </b>
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-2">Education</h2>
          <ul className="list-disc pl-4">
            <li>
              Strong verbal and written communication skills, comfortable
              collaborating with remote teams.
            </li>
            <li>
              Quick learner with a sharp problem-solving mindset and logical
              thinking approach.{" "}
            </li>
            <li>
              Quick learner with a sharp problem-solving mindset and logical
              thinking approach.{" "}
            </li>
          </ul>
        </section>

        {/* Download Button */}
        <div className="mt-8 flex justify-end">
          <a href="/resume.pdf" download="Aman-Sharma-Resume.pdf">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-6 rounded-lg shadow-md hover:shadow-cyan-500/50 transition-all duration-300 group md:my-10 my-5">
              <Download className="w-4 h-4 mr-2 animate-bounce" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePopup;
