import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: "Front-end",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Back-end",
      skills: ["Node.js", "Express", "Python", "Django", "PHP"]
    },
    {
      category: "Base de données",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
    },
    {
      category: "Outils",
      skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(category => (
            <div key={category.category} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;