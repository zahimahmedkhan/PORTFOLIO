import React from "react";
import { Button } from "../ui/button";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-10 bg-gradient-to-r from-blue-700 to-purple-900 bg-clip-text text-transparent leading-right">
              Hi, I'm Zahim Ahmed Khan
            </h1>

            <p className="text-gray-400 text-lg mb-10 max-w-4xl mx-auto">
              I'm a passionate web developer with a keen eye for detail and a
              knack for crafting elegant digital solutions. With a solid
              foundation in 'HTML', 'CSS', 'JavaScript', 'TypeScript',
              'Tailwindcss' and 'React' I specialize in building responsive and
              user-centric websites. I'm excited to apply my skills to
              innovative projects and contribute to a dynamic team. Let's build
              something amazing together.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#projects">
                <Button 
                  size="lg"
                  className="bg-blue-500/50 text-white py-3 px-6 font-medium transition relative overflow-hidden cursor-pointer hover:bg-black "
                >
                  View Projects
                </Button>
              </a>
              <a href="#Contacts">
                <Button
                  size="lg"
                  className="text-blue-500 border border-blue-600 transition relative overflow-hidden cursor-pointer hover:bg-blue-500/50 hover:text-white"
                >
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
