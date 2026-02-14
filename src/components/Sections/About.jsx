import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import ScrollAnimation from 'react-animate-on-scroll';

export const About = () => {
  const frontend = [
    "HTML5",
    "CSS3",
    "JavaScript [ES6+]",
    "Tailwind CSS",
    "Bootstrap",
    "React",
    "Vite",
    "React-Redux",
    "Next.js",
    "TypeScript",
    "State Management",
    "Responsive UI Design",
    "Component-Based Architecture",
    "Authentication-Based UI Flow",
    "API Integration (Axios / Fetch)",
    "Form Handling & Validation",
    "Reusable UI Components",
  ];
  
  const backend = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "MongoDB [ODM]",
    "Mongoose",
    "JWT Authentication",
    "Password Hashing [bcrypt]",
    "Middleware & Route Protection",
    "File Upload Handling [Multer]",
    "Cloudinary Integration",
    "Email Services [Nodemailer]",
    "Environment Configuration [dotenv]",
    "MVC / Modular Backend Architecture",
    "Firebase",
    "Git & GitHub"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
      style={{
        background: "linear-gradient(to bottom, transparent 0%, rgba(6, 182, 212, 0.02) 50%, transparent 100%), linear-gradient(135deg, #030712 0%, #000000 50%, #030712 100%)"
      }}
    >
      <ScrollAnimation animateIn="fadeIn">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto px-4 space-y-12">
            {/* Header */}
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className="rounded-2xl p-8 border border-cyan-500/20 bg-cyan-950/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-cyan-400">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {frontend.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/15 text-cyan-300 py-2 px-4 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/25 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-2xl p-8 border border-purple-500/20 bg-purple-950/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-purple-400">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {backend.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/15 text-purple-300 py-2 px-4 rounded-full text-sm font-medium border border-purple-500/30 hover:bg-purple-500/25 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="rounded-2xl p-8 md:p-10 border border-green-500/20 bg-green-950/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-xl">🎓</span>
                </div>
                <h3 className="text-3xl font-bold text-green-400">Education</h3>
              </div>

              <div className="space-y-6">
                {/* Current Study */}
                <div className="pl-6 border-l-2 border-green-500/50 hover:border-green-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-green-300 mb-1">
                        Software Technology
                      </h4>
                      <p className="text-gray-400 font-medium mb-1">
                        Jinnah Polytechnic Institute
                      </p>
                      <p className="text-gray-500 text-sm">Currently Enrolled</p>
                    </div>
                    <span className="text-green-400 font-semibold mt-2 md:mt-0 text-sm">In Progress</span>
                  </div>
                </div>

                 {/* course */}
                <div className="pl-6 border-l-2 border-green-500/50 hover:border-green-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-green-300 mb-1">
                        Web Development
                      </h4>
                      <p className="text-gray-400 font-medium mb-1">
                        SMIT [Saylani Mass IT Traning]
                      </p>
                      <p className="text-gray-500 text-sm">MERN Stack & Modern Web Development</p>
                    </div>
                    <span className="text-green-400 font-semibold mt-2 md:mt-0 text-sm">Completed</span>
                  </div>
                </div>

                {/* College */}
                <div className="pl-6 border-l-2 border-green-500/50 hover:border-green-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-green-300 mb-1">
                        Intermediate
                      </h4>
                      <p className="text-gray-400 font-medium mb-1">
                        DJ Sindh GOVT Science College
                      </p>
                      <p className="text-gray-500 text-sm">Science Stream</p>
                    </div>
                    <span className="text-green-400 font-semibold mt-2 md:mt-0 text-sm">Completed</span>
                  </div>
                </div>

                {/* Matric */}
                <div className="pl-6 border-l-2 border-green-500/50 hover:border-green-400 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-green-300 mb-1">
                        Matric (Primary Education)
                      </h4>
                      <p className="text-gray-400 font-medium mb-1">
                        Hill Crest School
                      </p>
                      <p className="text-gray-500 text-sm">Foundation</p>
                    </div>
                    <span className="text-green-400 font-semibold mt-2 md:mt-0 text-sm">Completed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center hover:border-blue-500/40 transition-all">
                <p className="text-3xl font-bold text-blue-400 mb-2">MERN</p>
                <p className="text-gray-400 text-sm">Stack Expert</p>
              </div>
              <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-center hover:border-cyan-500/40 transition-all">
                <p className="text-3xl font-bold text-cyan-400 mb-2">Full</p>
                <p className="text-gray-400 text-sm">Stack Dev</p>
              </div>
              <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center hover:border-purple-500/40 transition-all">
                <p className="text-3xl font-bold text-purple-400 mb-2">18+</p>
                <p className="text-gray-400 text-sm">Technologies</p>
              </div>
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center hover:border-green-500/40 transition-all">
                <p className="text-3xl font-bold text-green-400 mb-2">Code</p>
                <p className="text-gray-400 text-sm">Quality First</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </ScrollAnimation>
    </section>
  );
};
