import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-50 bg-gray-50 dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 dark:text-gray-50">
          <span>Lavarde Corentin</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex items-center gap-4 mr-4">
            <button
              onClick={toggleTheme}
              className="text-xl hover:text-blue-400 transition"
            >
              {theme === "dark" ? (
                <CiLight className="text-white hover:text-blue-400 " />
              ) : (
                <MdDarkMode />
              )}
            </button>
          </div>
          <a
            href="#about"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            À propos
          </a>
          <a
            href="#projects"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Projets
          </a>
          <a
            href="#skills"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Compétences
          </a>
          <a
            href="#contact"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            Contact
          </a>
        </nav>

        <div className="md:hidden flex items-center space-x-4">
          <button
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-gray-50 dark:bg-gray-800 py-4 px-4 shadow-lg">
          <ul className="space-y-4">
            <li>
              <a
                href="#about"
                className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 mr-4">
            <button
              onClick={toggleTheme}
              className="text-xl hover:text-blue-400 transition"
            >
              {theme === "dark" ? <CiLight /> : <MdDarkMode />}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
