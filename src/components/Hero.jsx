import React from "react";

function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bonjour, je suis{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-300">
            Votre Nom
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6">
          Développeur Web Full Stack
        </h2>
        <p className="text-xl max-w-2xl mb-8">
          Je crée des applications web modernes et performantes
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300 ease-in-out"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
