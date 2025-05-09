import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import ScrollAnimation from 'react-animate-on-scroll';

export const About = () => {
  const frontend = [" HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "BootStrap", "TypeScript",];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ScrollAnimation animateIn="fadeIn">


      
      <RevealOnScroll>

      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover translate-y-1 transition-all">
          <p className=" text-gray-300 mb-3">
            "I'm currently studying web development and have been building my
            skills in 'HTML', 'CSS', 'JavaScript', and modern tools like 'Tailwind CSS'
            and 'Firebase'. I've also explored the basics of 'TypeScript' and 'React',
            which have helped me understand component-based architecture and
            type-safe coding. I enjoy creating clean, responsive, and
            user-friendly websites, and I'm passionate about learning new
            technologies to become a full-stack developer."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className=" text-gray-400 text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((tech ,key)=>(
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                              hover:shadow[0_2px_8px_rgba(59 ,130 ,246 ,0.2)] transition cursor-pointer"
                  >
                    {tech}
                  </span>
                  
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
          <div className="p-6 rounded-xl text-center border-white/10 border hover:translate-y-1 transition-all">
                <h3 className="text-2xl text-gray-400 font-bold mb-4">🎓 Education</h3>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>
                  <strong> Web Development </strong> - Saylani Mass IT-Tarining 
                  </li>
                </ul>
          </div>
        </div>
      </div>
      </RevealOnScroll>
      </ScrollAnimation>
    </section>
  );
};
