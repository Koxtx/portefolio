import React, { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(6); // Nombre initial de projets à afficher
  const [initialCount] = useState(6); // Garde en mémoire le nombre initial pour pouvoir y revenir
  
  const username = "Koxtx";

  useEffect(() => {
    const fetchProjectsWithLanguages = async () => {
      try {
        setLoading(true);
        // 1. Récupérer la liste des repos
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`
        );

        if (!reposResponse.ok) {
          throw new Error("Erreur lors de la récupération des repos GitHub");
        }

        const reposData = await reposResponse.json();
        
        // 2. Pour chaque repo, récupérer ses langages
        const reposWithLanguages = await Promise.all(
          reposData.map(async (repo) => {
            try {
              const languagesResponse = await fetch(repo.languages_url);
              const languagesData = await languagesResponse.json();
              
              // Extraire les noms des langages depuis l'objet retourné par l'API
              const languages = Object.keys(languagesData);
              
              return {
                ...repo,
                allLanguages: languages
              };
            } catch (error) {
              console.error(`Erreur lors de la récupération des langages pour ${repo.name}:`, error);
              return {
                ...repo,
                allLanguages: repo.language ? [repo.language] : []
              };
            }
          })
        );

        const formattedProjects = reposWithLanguages.map((repo) => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || "Pas de description disponible.",
          technologies: repo.allLanguages,
          githubLink: repo.html_url,
          demoLink: repo.homepage || "#",
          stars: repo.stargazers_count,
          forks: repo.forks_count,
        }));

        // Trier les projets par nombre d'étoiles (ordre décroissant)
        const sortedProjects = formattedProjects.sort((a, b) => b.stars - a.stars);

        setProjects(sortedProjects);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProjectsWithLanguages();
  }, [username]);

  const loadMoreProjects = () => {
    // Augmenter le nombre de projets affichés
    setDisplayCount(prevCount => prevCount + 6);
  };

  const showLessProjects = () => {
    // Retour au nombre initial de projets
    setDisplayCount(initialCount);
  };

  if (loading)
    return <div className="text-center py-20">Chargement des projets...</div>;
  if (error)
    return (
      <div className="text-center py-20 text-red-500">Erreur: {error}</div>
    );

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-50">
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, displayCount).map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-50">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-col space-y-4 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies && project.technologies.length > 0 ? (
                      project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        Pas de technologies spécifiées
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <span className="flex items-center mr-3">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {project.stars}
                    </span>
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {project.forks}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-gray-50 text-sm font-medium rounded-lg hover:bg-gray-900 transition duration-300"
                  >
                    GitHub
                  </a>
                  {project.demoLink && project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 text-gray-50 text-sm font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Boutons pour contrôler l'affichage */}
        <div className="text-center mt-10 flex justify-center gap-4">
          {/* Bouton "Afficher plus" - visible uniquement s'il y a plus de projets à montrer */}
          {projects.length > displayCount && (
            <button
              onClick={loadMoreProjects}
              className="px-6 py-3 bg-indigo-500 text-gray-50 font-medium rounded-lg hover:bg-indigo-600 transition duration-300"
            >
              Afficher plus de projets
            </button>
          )}
          
          {/* Bouton "Afficher moins" - visible uniquement si on affiche plus que le nombre initial */}
          {displayCount > initialCount && (
            <button
              onClick={showLessProjects}
              className="px-6 py-3 bg-gray-500 text-gray-50 font-medium rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Afficher moins de projets
            </button>
          )}
        </div>

        <div className="text-center mt-10">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-gray-50 font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;