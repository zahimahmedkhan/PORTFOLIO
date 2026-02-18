import React from "react";
import { Button } from "../ui/button";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28"
        style={{
          background: "linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%), linear-gradient(to bottom, #000000 0%, #030712 50%, #000000 100%)"
        }}
      >
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: "2s"}}></div>

        <RevealOnScroll>
          <div className="text-center z-10 px-4 max-w-6xl">
            {/* Badge */}
            <div className="mb-8 inline-block">
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold hover:border-blue-500/100 transition">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Hi, I'm Zahim Ahmed Khan
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-2 font-semibold">
              Full Stack MERN Developer
            </p>

            {/* Professional Introduction */}
            <div className="max-w-4xl mx-auto mb-10 space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a <span className="font-bold text-cyan-400">MERN Stack Developer</span> passionate about building modern, scalable, and user-centric web applications. With expertise in both frontend and backend development, I create end-to-end solutions that combine elegant design with robust functionality.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                I specialize in creating responsive, interactive user interfaces using React and Next.js, while leveraging Node.js and MongoDB on the backend to build high-performance APIs. I'm dedicated to writing clean, maintainable code and staying updated with the latest technologies in the JavaScript ecosystem.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <a href="#projects">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 px-8 font-bold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 cursor-pointer"
                >
                  View Projects
                </Button>
              </a>
              <a href="#contacts">
                <Button
                  size="lg"
                  className="text-white border-2 border-cyan-500/60 hover:border-cyan-400 hover:bg-cyan-500/10 py-3 px-8 font-bold rounded-lg transition duration-300 cursor-pointer"
                >
                  Contact Me
                </Button>
              </a>
            </div>

            {/* Tech Stack Preview */}
            <div className="mt-16 pt-8 border-t border-gray-800/50">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Tech Stack</p>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full hover:border-blue-500/50 hover:text-blue-300 transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
