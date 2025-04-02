import React from "react";


function About() {
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
                src="../../photos/photos_profil.jpg"
                alt="Corentin Lavarde"
                className="rounded-full w-96 h-96"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Actuellement en formation Concepteur Développeur d'Application, je
              recherche un stage du 25/08 au 19/09 pour mettre en pratique mes
              compétences en entreprise.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Au cours de ma formation, j'ai renforcé mes compétences en
              développement front-end et back-end. J'ai appris à concevoir des
              applications sécurisées, définir une architecture logicielle,
              gérer des bases de données SQL/NoSQL et contribuer à la gestion de
              projet.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://zupimages.net/viewer.php?id=25/14/orcw.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 text-gray-50 font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Télécharger CV
              </a>
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
