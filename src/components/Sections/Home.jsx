import React from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";
import { RevealOnScroll } from "../RevealOnScroll";
const basePath = `${import.meta.env.BASE_URL.replace(/\/?$/, "/")}`;
const RESUME_LOCAL_URL = `${basePath}resume.pdf`;
const RESUME_FROM_ENV =
  typeof import.meta.env.VITE_RESUME_PDF_URL === "string"
    ? import.meta.env.VITE_RESUME_PDF_URL.trim()
    : "";
const RESUME_PDF_URL = RESUME_FROM_ENV

/** Cloudinary image delivery URL for your headshot (square photo works best). Leave empty for initials. */
const HERO_PROFILE_IMAGE_URL = `https://res.cloudinary.com/dy9dwcnqs/image/upload/v1782931215/image_hwsgkx.jpg`;

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
          <div className="z-10 px-4 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-14 lg:gap-16">
              {/* Profile */}
              <div className="shrink-0 order-first">
                <style>{`
                  @keyframes subtle-pulse {
                    0%, 100% { box-shadow: 0 0 30px 6px rgba(6,182,212,0.15), 0 0 60px 12px rgba(59,130,246,0.08); }
                    50%       { box-shadow: 0 0 40px 10px rgba(6,182,212,0.25), 0 0 80px 18px rgba(59,130,246,0.14); }
                  }
                  @keyframes dot-ping {
                    0%        { transform: scale(1); opacity: 1; }
                    75%, 100% { transform: scale(2); opacity: 0; }
                  }
                `}</style>

                <div className="relative mx-auto md:mx-0" style={{ width: "350px", height: "350px" }}>

                  {/* Gradient border ring */}
                  <div style={{
                    position: "absolute", inset: "-3px", borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(6,182,212,0.7) 0%, rgba(59,130,246,0.5) 50%, rgba(139,92,246,0.6) 100%)",
                    padding: "3px"
                  }} aria-hidden>
                    <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#040d1a" }} />
                  </div>

                  {/* Soft ambient glow */}
                  <div style={{
                    position: "absolute", inset: "-8px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
                    filter: "blur(8px)"
                  }} aria-hidden />

                  {/* Avatar circle */}
                  <div style={{
                    position: "relative", width: "100%", height: "100%",
                    borderRadius: "50%", overflow: "hidden",
                    background: "linear-gradient(145deg, #0d1b2e 0%, #060d1f 100%)",
                    animation: "subtle-pulse 4s ease-in-out infinite"
                  }}>
                    {HERO_PROFILE_IMAGE_URL ? (
                      <img
                        src={HERO_PROFILE_IMAGE_URL}
                        alt="Zahim Ahmed Khan"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <div style={{
                        width: "100%", height: "100%",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center", gap: "6px"
                      }}>
                        <span style={{
                          fontSize: "4.8rem", fontWeight: 900, lineHeight: 1,
                          background: "linear-gradient(135deg, #67e8f9 0%, #38bdf8 50%, #818cf8 100%)",
                          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                          backgroundClip: "text", letterSpacing: "0.06em", userSelect: "none"
                        }} aria-hidden>ZAK</span>
                        <div style={{
                          width: "36px", height: "1.5px",
                          background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)"
                        }} aria-hidden />
                        <span style={{
                          fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase",
                          color: "rgba(148,163,184,0.55)", fontWeight: 500, userSelect: "none"
                        }} aria-hidden>Developer</span>
                      </div>
                    )}
                  </div>

                  {/* Status badge */}
                  <div style={{
                    position: "absolute", bottom: "8px", left: "50%",
                    transform: "translateX(-50%)",
                    background: "#0a1628",
                    border: "1px solid rgba(34,197,94,0.4)",
                    borderRadius: "99px", padding: "3px 10px",
                    display: "flex", alignItems: "center", gap: "5px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.4)"
                  }}>
                    <span style={{ position: "relative", display: "inline-flex", width: "7px", height: "7px" }}>
                      <span style={{
                        position: "absolute", inset: 0, borderRadius: "50%",
                        background: "rgba(34,197,94,0.5)",
                        animation: "dot-ping 1.6s ease-out infinite"
                      }} />
                      <span style={{
                        width: "7px", height: "7px", borderRadius: "50%",
                        background: "#22c55e", display: "inline-block"
                      }} />
                    </span>
                    <span style={{
                      fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.06em",
                      color: "rgba(134,239,172,0.85)", textTransform: "uppercase"
                    }}>Available</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-0 text-center md:text-left">
                {/* Badge */}
                <div className="mb-8 inline-block">
                  <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold hover:border-blue-500/100 transition">
                    Welcome to my portfolio
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Hi, I'm Zahim Ahmed Khan
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-300 mb-2 font-semibold">
                  Full Stack MERN Developer
                </p>

                {/* Professional Introduction */}
                <div className="max-w-4xl mx-auto md:mx-0 mb-10 space-y-4">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a <span className="font-bold text-cyan-400">MERN Stack Developer</span> passionate about building modern, scalable, and user-centric web applications. With expertise in both frontend and backend development, I create end-to-end solutions that combine elegant design with robust functionality.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed">
                    I specialize in creating responsive, interactive user interfaces using React and Next.js, while leveraging Node.js and MongoDB on the backend to build high-performance APIs. I'm dedicated to writing clean, maintainable code and staying updated with the latest technologies in the JavaScript ecosystem.
                  </p>
                </div>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-12">
                  <a href="#projects">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 px-8 font-bold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 cursor-pointer"
                    >
                      View Projects
                    </Button>
                  </a>
                  <a href="#contacts">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto text-white border-2 border-cyan-500/60 hover:border-cyan-400 hover:bg-cyan-500/10 py-3 px-8 font-bold rounded-lg transition duration-300 cursor-pointer"
                    >
                      Contact Me
                    </Button>
                  </a>
                  <a
                    href={RESUME_PDF_URL}
                    download="Zahim-Ahmed-Khan-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto text-white border-2 border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 py-3 px-8 font-bold rounded-lg transition duration-300 cursor-pointer"
                    >
                      <Download className="size-5" aria-hidden />
                      Download Resume
                    </Button>
                  </a>
                </div>

                {/* Tech Stack Preview */}
                <div className="mt-16 pt-8 border-t border-gray-800/50 md:max-w-none">
                  <p className="text-gray-400 text-sm uppercase tracking-widest mb-4 text-center md:text-left">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 max-w-3xl mx-auto md:mx-0">
                    {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full hover:border-blue-500/50 hover:text-blue-300 transition">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
