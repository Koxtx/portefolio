import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          <span>Votre Nom</span>
        </div>
        
        {/* Menu pour mobile */}
        <button 
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">À propos</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Projets</a>
          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Compétences</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
        </nav>
      </div>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 py-4 px-4 shadow-lg">
          <ul className="space-y-4">
            <li><a href="#about" className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" onClick={() => setIsMenuOpen(false)}>À propos</a></li>
            <li><a href="#projects" className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" onClick={() => setIsMenuOpen(false)}>Projets</a></li>
            <li><a href="#skills" className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" onClick={() => setIsMenuOpen(false)}>Compétences</a></li>
            <li><a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;