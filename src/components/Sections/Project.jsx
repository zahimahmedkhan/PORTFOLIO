import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, transparent 0%, rgba(168, 85, 247, 0.02) 50%, transparent 100%), linear-gradient(135deg, #000000 0%, #030712 50%, #000000 100%)"
      }}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: "2s"}}></div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">Showcase of my best MERN stack projects with modern design and robust functionality</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="group p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 to-transparent backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-gray-100 text-2xl font-bold">
                  HealthCare App
                </h3>
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30 font-semibold\">Hackathon</span>
              </div>
              <p className="text-gray-300 mb-6 text-base leading-relaxed">
               AI-powered healthcare platform with OCR scanning, document processing, and secure file management.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "React",
                  "Vite",
                  "Redux Toolkit",
                  "Tailwind CSS",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Cloudinary",
                  "JWT",
                  "Gemini API",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-cyan-500/15 text-cyan-300 py-1.5 px-3 rounded-full text-xs font-semibold border border-cyan-500/30 hover:bg-cyan-500/25 hover:border-cyan-500/60 transition cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-cyan-500/10">
                <span className="text-gray-400 text-sm\">Full Stack MERN</span>
                <a
                  href="https://health-care-app-nu-virid.vercel.app"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors inline-flex items-center gap-2 group/link"
                >
                  View Project 
                  <span className="group-hover/link:translate-x-1 transition-transform\">→</span>
                </a>
              </div>
            </div>
            <div
              className="group p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/30 to-transparent backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-gray-100 text-2xl font-bold">
                  Expense Tracker
                </h3>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30 font-semibold">Full Stack</span>
              </div>
              <p className="text-gray-300 mb-6 text-base leading-relaxed">
                Track and manage expenses with interactive charts and insights. Take control of your financial journey.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "React",
                  "Tailwind CSS",
                  "Recharts",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "JWT",
                  "Multer",
                  "Cloudinary",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/15 text-purple-300 py-1.5 px-3 rounded-full text-xs font-semibold border border-purple-500/30 hover:bg-purple-500/25 hover:border-purple-500/60 transition cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-purple-500/10">
                <span className="text-gray-400 text-sm">Full Stack MERN</span>
                <a
                  href="https://expense-tracker-psi-sepia-89.vercel.app"
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors inline-flex items-center gap-2 group/link"
                >
                  View Project 
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
