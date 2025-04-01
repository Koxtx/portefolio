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
                alt="Votre Nom"
                className="rounded-full w-96 h-96"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Je suis un développeur web passionné par la création
              d'applications web intuitives et performantes. Avec une solide
              expérience en développement front-end et back-end, je m'efforce de
              construire des produits qui résolvent des problèmes réels.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Mon parcours dans le développement web a commencé il y a [X
              années], et depuis, j'ai travaillé sur divers projets allant des
              applications web complexes aux sites vitrines élégants. Je suis
              constamment en train d'apprendre de nouvelles technologies et
              techniques pour améliorer mes compétences.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="../../cv/CV_LAVARDE_corentin_stage_CDA.pdf"
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
                href="www.linkedin.com/in/lavarde"
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
