import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export const Fotter = () => {
    return (
        <footer className="bg-black text-gray-300 border-t border-blue-500/50">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-blue-400 text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                  <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
                  <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                  <li><a href="#Contacts" className="hover:text-blue-400 transition">Contact</a></li>
                </ul>
              </div>
    
              {/* Contact Info */}
              <div>
                <h3 className="text-blue-400 text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaEnvelope className="mr-2 text-blue-400" />
                    <a href="mailto:zahim@example.com" className="hover:text-blue-400 transition">
                      zahim@example.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 (123) 456-7890
                  </li>
                </ul>
              </div>
    
              {/* Social Media */}
              <div>
                <h3 className="text-blue-400 text-lg font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    <FaGithub size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
    
              {/* Newsletter */}
              <div>
                <h3 className="text-blue-400 text-lg font-semibold mb-4">Newsletter</h3>
                <p className="mb-4">Subscribe to get updates on my latest projects</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                  <button className="bg-blue-500/50 hover:bg-blue-600/70 text-white px-4 py-2 rounded-r transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
    
            {/* Copyright */}
            <div className="border-t border-blue-500/20 mt-12 pt-8 text-center">
              <p>© {new Date().getFullYear()} Zahim Ahmed Khan. All rights reserved.</p>
              <p className="text-sm mt-2 text-gray-500">
                Built with React, Tailwind CSS, and ❤️
              </p>
            </div>
          </div>
        </footer>
      );
}
