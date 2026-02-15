import React, { useState } from 'react'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="#home" className="group">
              <h1 className="text-white text-2xl font-black tracking-tight">
                Zahim <span className='text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text'>Ahmed</span> Khan
              </h1>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition">MERN Stack Developer</p>
            </a>
          </div>
        
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-1">
            <li><a href="#home" className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition duration-300 font-medium">Home</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition duration-300 font-medium">About</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition duration-300 font-medium">Projects</a></li>
            <li><a href="#contacts" className="text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition duration-300 font-medium">Contact</a></li>
          </ul>
        
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl hover:text-cyan-400 transition">
            {isOpen ? "✖" : "☰"} 
          </button>
        </div>
      
        {/* Mobile Navigation */}
        <div className={`md:hidden bg-black/80 backdrop-blur-xl w-full border-t border-white/10 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col space-y-2 py-4 px-6">
            <li><a href="#home" className="text-gray-300 hover:text-white block px-4 py-2 rounded-lg hover:bg-white/10 transition" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-white block px-4 py-2 rounded-lg hover:bg-white/10 transition" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-white block px-4 py-2 rounded-lg hover:bg-white/10 transition" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contacts" className="text-gray-300 hover:text-white block px-4 py-2 rounded-lg hover:bg-white/10 transition" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>
    )
}
