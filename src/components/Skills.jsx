import React from "react";

function Skills() {
  const skillCategories = [
    {
      category: "Front-end",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Sass"],
    },
    {
      category: "Back-end",
      skills: ["Node.js", "Express"],
    },
    {
      category: "Base de données",
      skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      category: "Outils & Méthodes",
      skills: ["Git", "GitHub", "VS Code", "Docker", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-50">
          Mes Compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full shadow-sm"
                  >
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
