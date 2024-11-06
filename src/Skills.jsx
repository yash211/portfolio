import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      skills: ["JavaScript", "Python", "Java", "TypeScript"],
      x: 250, y: 50,
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "React", "Bootstrap"],
      x: 450, y: 250,
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Django", "REST APIs"],
      x: 250, y: 450,
    },
    {
      category: "Technologies",
      skills: ["Git", "Docker", "AWS", "Firebase"],
      x: 50, y: 250,
    },
  ];

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">
      {/* Central Skills Hub */}
      <div className="w-32 h-32 bg-red-500 text-white font-bold flex items-center justify-center rounded-full shadow-lg z-10">
        Skills
      </div>

      {/* SVG Canvas for connecting lines */}
      <svg className="absolute top-0 left-0 w-full h-full">
        {skills.map((category, index) => (
          <line
            key={index}
            x1="50%" y1="50%"
            x2={`${category.x}px`} y2={`${category.y}px`}
            stroke="red" strokeWidth="2"
          />
        ))}
      </svg>

      {/* Skill Category Cards */}
      {skills.map((category, index) => (
        <div
          key={index}
          className="absolute bg-white p-4 rounded-lg shadow-md text-center"
          style={{ left: category.x, top: category.y }}
        >
          <h3 className="text-red-500 font-semibold mb-2">{category.category}</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
