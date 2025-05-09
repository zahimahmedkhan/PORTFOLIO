import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
            className="p-6 rounded-xl border-white/10 border hover:translate-y-1 hover:border-blue-500/30 
                          hover:shadow[0_2px_8px_rgba(59 ,130 ,246 ,0.1)] transition-all"
          >
            <h3 className="text-gray-300 text-xl font-bold mb-4">
              Simple landing Page
            </h3>
            <p className="text-gray-300 mb-4">
              A sleek and responsive landing page built with React and Tailwind CSS, perfect for showcasing products or services.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Tailwindcss"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                       hover:shadow[0_2px_8px_rgba(59 ,130 ,246 ,0.2)] transition cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center items-center mt-4">
              <a
                href="https://zahimkhan18.github.io/Landing-page/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 border border-gray-800 px-3 py-1 rounded-lg hover:border-blue-500/30"
              >
                View Project →
              </a>
            </div>
          </div>
        <div
            className="p-6 rounded-xl border-white/10 border hover:translate-y-1 hover:border-blue-500/30 
                          hover:shadow[0_2px_8px_rgba(59 ,130 ,246 ,0.1)] transition-all"
          >
            <h3 className="text-gray-300 text-xl font-bold mb-4">
              BackGround colors Generator
            </h3>
            <p className="text-gray-300 mb-4">
              A simple web app that generates a random background color with each click, offering instant visual feedback.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "JAVASCRIPT"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                       hover:shadow[0_2px_8px_rgba(59 ,130 ,246 ,0.2)] transition cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center items-center mt-4">
              <a
                href="https://zahimkhan18.github.io/random-BG-color-generator/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 border border-gray-800 px-3 py-1 rounded-lg hover:border-blue-500/30"
              >
                View Project →
              </a>
            </div>
          </div>
          <div
            className="p-6 rounded-xl border-white/10 border hover:translate-y-1 hover:border-blue-500/30 
                          hover:shadow[0_2px_8px_rgba(59 ,130 ,246 ,0.1)] transition-all"
          >
            <h3 className="text-gray-300 text-xl font-bold mb-4">
              Prestige Wears
            </h3>
            <p className="text-gray-300 mb-4">
               A responsive React-based E-commerce website with product listings, cart functionality, and a modern UI.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Firebase", "Tailwindcss"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                       hover:shadow[0_2px_8px_rgba(59 ,130 ,246 ,0.2)] transition cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center items-center mt-4">
              <a
                href="https://zahimkhan18.github.io/React-E-commerce/"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 border border-gray-800 px-3 py-1 rounded-lg hover:border-blue-500/30"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
