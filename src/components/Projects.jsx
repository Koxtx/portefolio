import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "Description du projet 1. Expliquez ce que vous avez créé et les technologies utilisées.",
      image: "/images/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "https://github.com/username/project1",
      demoLink: "https://project1-demo.com"
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Description du projet 2. Expliquez ce que vous avez créé et les technologies utilisées.",
      image: "/images/project2.jpg",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubLink: "https://github.com/username/project2",
      demoLink: "https://project2-demo.com"
    },
    {
      id: 3,
      title: "Projet 3",
      description: "Description du projet 3. Expliquez ce que vous avez créé et les technologies utilisées.",
      image: "/images/project3.jpg",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      githubLink: "https://github.com/username/project3",
      demoLink: "https://project3-demo.com"
    },
    // Ajoutez d'autres projets selon vos besoins
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition duration-300"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition duration-300"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;