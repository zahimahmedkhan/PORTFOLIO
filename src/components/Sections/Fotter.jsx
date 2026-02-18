import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export const Fotter = () => {
    return (
        <footer className="text-gray-300 border-t border-blue-500/30" style={{background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.03) 0%, #000000 50%, #030712 100%)"}}>
          <div className="container mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Branding */}
            <div>
              <h3 className="text-white text-xl font-black mb-4">
                Zahim <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">Ahmed</span> Khan
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full Stack MERN Developer crafting modern web solutions with clean code and innovative design.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-blue-400 text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition font-medium">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition font-medium">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition font-medium">Projects</a></li>
                <li><a href="#contacts" className="text-gray-400 hover:text-blue-400 transition font-medium">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-blue-400 text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-blue-400" />
                  <a href="mailto:zahimahmedkhan@gmail.com" className="text-gray-400 hover:text-blue-400 transition font-medium">
                    zahimahmedkhan@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 font-bold mr-3">📍</span>
                  <a className="text-gray-400 font-medium">
                    Karachi, Pakistan
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-blue-400 text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/zahimahmedkhan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition text-2xl hover:scale-110 transform">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/zahim-ahmed-khan-5937742a7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition text-2xl hover:scale-110 transform">
                  <FaLinkedin />
                </a>
                </div>
              </div>
            </div>
    
            {/* Divider */}
            <div className="border-t border-blue-500/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Zahim Ahmed Khan. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs">
                  Designed & Built with React, Tailwind CSS, and ❤️
                </p>
              </div>
            </div>
          </div>
        </footer>
      );
}
