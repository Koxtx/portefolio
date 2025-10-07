import React from "react";

function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
  Bonjour, je suis 
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-yellow-300 ml-3">
    Lavarde Corentin
  </span>
</h1>
<h2 className="text-2xl md:text-3xl mb-6">
  Développeur Backend / Full Stack JavaScript
</h2>
<p className="text-xl max-w-2xl mb-8">
  À la recherche d’une première expérience professionnelle (CDI, CDD ou stage)
  pour mettre à profit mes compétences en développement backend.
</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-gray-50 text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-white text-gray-50 font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300 ease-in-out"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;