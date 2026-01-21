import React from "react";

function About() {
  const photoUrl = "https://zupimages.net/up/25/14/orcw.jpg";
  

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-50">
          À Propos
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto shadow-lg">
              <img
                src={photoUrl}
                alt="Corentin Lavarde"
                className="rounded-full w-96 h-96"
              />
            </div>
          </div>
          <div className="md:w-2/3">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
  Récemment diplômé en Conception et Développement d’Applications, j’ai renforcé
  mes compétences en développement front-end et back-end. J’aime concevoir des
  applications sécurisées, définir une architecture logicielle et structurer des
  bases de données SQL/NoSQL.
</p>
<p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
  Passionné par le développement backend, je recherche une opportunité au sein
  d’une équipe où je pourrai continuer à apprendre, contribuer à des projets
  concrets et évoluer professionnellement.
</p>
            <div className="flex flex-wrap gap-2">
           
              <a
                href="https://github.com/Koxtx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-gray-50 font-medium rounded-lg hover:bg-gray-900 transition duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/lavarde"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-gray-50 font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
