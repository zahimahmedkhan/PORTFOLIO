import React, { useState } from 'react'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <nav className="fixed top-0 left-0 w-full bg-black border-b-1 border-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    
    <div>
        <a href="#home">
        <h1 className="text-white text-xl font-bold">Zahim <span className='text-[#105abb]'>Ahmed</span> <span>Khan</span></h1>
        </a>
    </div>
  
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-gray-300 hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="text-gray-300 hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-blue-400">Project</a></li>
          <li><a href="#Contacts" className="text-gray-300 hover:text-blue-400">Contact</a></li>
        </ul>
  
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-2xl">
          {isOpen ? "✖" : "☰"} 
        </button>
      </div>
  
      <div className={`md:hidden bg-black w-full text-center ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4 py-4">
          <li><a href="#" className="text-gray-300 hover:text-blue-400 block" onClick={() => setIsOpen(!isOpen)}>Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-blue-400 block" onClick={() => setIsOpen(!isOpen)}>About</a></li>
          <li><a href="#" className="text-gray-300 hover:text-blue-400 block" onClick={() => setIsOpen(!isOpen)}>Projects</a></li>
          <li><a href="#" className="text-gray-300 hover:text-blue-400 block" onClick={() => setIsOpen(!isOpen)}>Contact</a></li>
        </ul>
      </div>
    </nav>
    )
}
