import React from 'react';
import './assets/css/skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faPython, faJs, faJava, faHtml5, faCss3Alt, faReact, faBootstrap, faNodeJs,
  faAws, faDocker, faGit, faGithub, faPhp
} from '@fortawesome/free-brands-svg-icons';

import {
  faDatabase, faCogs, faMicrochip, faAtom, faChartLine, faServer, faVial,
  faCodeBranch, faLayerGroup, faLightbulb, faProjectDiagram, faToolbox,
  faLaptopCode, faUsers, faClock
} from '@fortawesome/free-solid-svg-icons';

const skillIcons = {
  // IT Constructs
  'Microservices Architecture': faProjectDiagram,
  'Redux': faReact,
  'React Unit Testing': faVial,
  'Singleton Design Patterns': faLayerGroup,
  'APIs': faServer,
  'Artificial Intelligence': faAtom,
  'Machine Learning': faChartLine,
  'Deep Learning': faMicrochip,
  'Natural Language Processing': faChartLine,

  // Programming Languages
  'HTML5': faHtml5,
  'CSS': faCss3Alt,
  'JavaScript': faJs,
  'Python': faPython,
  'TypeScript': faJs,
  'C++': faCodeBranch,
  'C': faCodeBranch,
  'C#': faLaptopCode,
  'Dart': faJs,
  'PHP': faPhp,
  'Jquery': faJs,

  // Frontend
  'React': faReact,
  'Bootstrap': faBootstrap,
  'Tailwind': faCss3Alt,

  // Backend
  'NestJS': faNodeJs,
  'NextJs': faNodeJs,
  'NodeJS': faNodeJs,
  'Express': faNodeJs,
  'Django': faPython,
  'Flask': faPython,
  'Flutter': faReact,
  'CodeIgniter': faPhp,

  // Data Science and Visualization Libraries
  'Tensorflow': faAtom,
  'Keras': faAtom,
  'Seaborn': faChartLine,
  'SkLearn': faChartLine,
  'Pandas': faPython,
  'Numpy': faPython,

  // Database
  'MongoDB': faDatabase,
  'MySQL': faDatabase,
  'SQLite': faDatabase,

  // Tools
  'Git': faGit,
  'Github': faGithub,
  'Postman': faToolbox,
  'Swagger': faCogs,
  'React Developer Tools': faReact,

  // DevOps
  'AWS EC2': faAws,
  'Oracle': faDatabase,
  'Docker': faDocker,
  'PM2': faCogs,

  // Other Skills
  'Leadership': faLightbulb,
  'Teamwork': faUsers,
  'Problem Solving': faCogs,
  'Time Management': faClock,
};

const skillCategories = [
  {
    category: 'IT Constructs',
    skills: ['Microservices Architecture', 'Redux', 'React Unit Testing', 'Singleton Design Patterns', 'APIs', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Natural Language Processing'],
  },
  {
    category: 'Programming Languages',
    skills: ['HTML5', 'CSS', 'JavaScript', 'Python', 'TypeScript', 'C++', 'C', 'C#', 'Dart', 'PHP', 'Jquery'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Bootstrap', 'Tailwind'],
  },
  {
    category: 'Backend',
    skills: ['NestJS', 'NextJs', 'NodeJS', 'Express', 'Django', 'Flask', 'Flutter', 'CodeIgniter']
  },
  {
    category: 'Data Science and Visualization Libraries',
    skills: ['Tensorflow', 'Keras', 'Seaborn', 'SkLearn', 'Pandas', 'Numpy']
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MySQL', 'SQLite'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Github', 'Postman', 'Swagger', 'React Developer Tools'],
  },
  {
    category: 'DevOps',
    skills: ['AWS EC2', 'Oracle', 'Docker', 'PM2'],
  },
  {
    category: 'Other Skills',
    skills: ['Leadership', 'Teamwork', 'Problem Solving', 'Time Management'],
  },
];

const Skills = () => {

  return (

    <section className="flex items-center justify-center mt-10 px-8 mx-8 text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-col items-start lg:space-x-12 space-y-12 lg:space-y-0">
        <div className="lg:w-full md-w-full sm-w-full h-full flex md:justify-center lg:justify-center sm-justify-center items-center">
          <h2 className="text-3xl font-sans font-bold italic mb-3 relative">
            <span className="relative z-10 px-4 text-black">Skills</span>
          </h2>
        </div>
        <div className="lg:w-full space-y-8">
          <div className="container mx-auto p-2">
            <table className="w-full text-left mt-1 border-collapse">
              <tbody>
                {skillCategories.map((category, index) => (
                  <tr
                    key={index}
                    className="animate-pulse-glow mt-2 gap-2"
                  >
                    <td
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 mt-3 text-lg font-semibold rounded-l-lg shadow-lg w-1/4"
                    >
                      {category.category}
                    </td>
                    <td className="p-4 flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                       
                        <div
                          key={idx}
                          className="bg-gradient-to-r from-blue-200 to-green-100 text-black p-3 rounded-lg shadow-lg flex items-center gap-3 hover:from-green-600 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                        >
                          <FontAwesomeIcon
                            icon={skillIcons[skill]}
                            className="text-2xl text-yellow-400 opacity-90 transition-all duration-300 ease-in-out transform hover:scale-110"
                          />
                          <span className="text-sm font-bold text-rose-950 tracking-wide uppercase">{skill}</span>
                        </div>

                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Skills;
