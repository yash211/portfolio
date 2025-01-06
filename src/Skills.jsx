
import React from 'react';
import './assets/css/skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faPython, faJs, faJava, faHtml5, faCss3Alt, faReact, faBootstrap,
  faAws, faDocker, faGit, faGithub, faPhp
} from '@fortawesome/free-brands-svg-icons';

import {
  faDatabase, faCogs, faMicrochip, faAtom, faChartLine, faServer, faVial,
  faCodeBranch, faLayerGroup, faLightbulb, faProjectDiagram, faToolbox,
  faLaptopCode, faUsers, faClock
} from '@fortawesome/free-solid-svg-icons';

// Map FontAwesome icons
const faIcons = {
  'Microservices Architecture': faProjectDiagram,
  'React Unit Testing': faVial,
  'Singleton Design Patterns': faLayerGroup,
  'Postman': faToolbox,
  'Swagger': faCogs,
  'React Developer Tools': faReact,
  'HTML5': faHtml5,
  'CSS': faCss3Alt,
  'JavaScript': faJs,
  'Python': faPython,
  'C#': faLaptopCode,
  'PHP': faPhp,
  'React': faReact,
  'Bootstrap': faBootstrap,
  'AWS EC2': faAws,
  'Docker': faDocker,
  'Git': faGit,
  'Github': faGithub,
  'APIs': faServer,
  'Leadership': faLightbulb,
  'Teamwork': faUsers,
  'Problem Solving': faCogs,
  'Time Management': faClock,
  'PM2': faCogs
};

// Skill categories and their corresponding skills
const skillCategories = [
  {
    category: 'IT Constructs',
    skills: ['Microservices Architecture', 'Redux', 'React Unit Testing', 'Singleton Design Patterns', 'APIs', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Natural Language Processing'],
  },
  {
    category: 'Programming Languages',
    skills: ['HTML5', 'CSS', 'JavaScript', 'Python', 'TypeScript', 'C++', 'C', 'Dart', 'PHP', 'Jquery'],
  },
  {
    category: 'Frameworks and Libraries',
    skills: ['React', 'Bootstrap', 'Tailwind', 'NestJS', 'NextJs', 'NodeJS', 'Express', 'Django', 'Flask', 'Flutter', 'CodeIgniter'],
  },
  {
    category: 'Data Science and Visualization Libraries',
    skills: ['Tensorflow', 'Keras', 'Seaborn', 'SkLearn', 'Pandas', 'Numpy', 'NLTK'],
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

const externalIcons = {
  'MySQL': 'mysql.png',
  'TypeScript': 'ts.png',
  'Tensorflow': 'tensorflow.png',
  'SQLite': 'sqlite.jpg',
  'SkLearn': 'sklearn.png',
  'Seaborn': 'seaborn.jpg',
  'Redux': 'redux.png',
  'Pandas': 'pandas.png',
  'Oracle': 'oracle.png',
  'Numpy': 'numpy.png',
  'NodeJS': 'node.png',
  'Natural Language Processing': 'nlp.png',
  'Deep Learning': 'deep.png',
  'Artificial Intelligence': 'ai.png',
  'NextJs': 'next.png',
  'NestJS': 'nest.png',
  'MongoDB': 'mongo.png',
  'Machine Learning': 'ml.png',
  'Jquery': 'jquery.jpg',
  'Keras': 'keras.png',
  'Express': 'express.png',
  'Flask': 'flask.png',
  'Flutter': 'flutter.png',
  'CodeIgniter': 'codeigniter.png',
  'C++': 'cplus.png',
  'C': 'cplus.png',
  'Dart': 'dart.png',
  'NLTK': 'nltk.png',
  'Django': 'django.png',
  'Tailwind' :'tailwind.png'
};

const Skills = () => (
  <section className="py-3 pl-9 mx-3 text-white">
    <h2 className="text-3xl font-sans font-bold italic mb-6 text-center text-black">Skills</h2>
    <div className="container mx-auto px-4 flex flex-col lg:flex-col items-start lg:space-x-12 space-y-12 lg:space-y-0">
      

      <div className="lg:w-full space-y-4">
        <div className="container mx-auto p-2">
          <table className="w-full text-left mt-1 border-collapse">
            <tbody>
              {skillCategories.map((category, index) => (
                <tr key={index} className="animate-pulse-glow mt-2 gap-2">
                  <td className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-2 text-sm font-semibold rounded-l-lg shadow-lg w-1/4">
                    {category.category}
                  </td>
                  <td className="p-2 flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-r from-blue-200 to-green-100 text-black p-2 rounded-lg shadow-lg flex items-center gap-2 hover:from-green-600 hover:to-blue-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                      >
                        {faIcons[skill] ? (
                          <FontAwesomeIcon
                            icon={faIcons[skill]}
                            className="text-xl opacity-90"
                          />
                        ) : (
                          <img
                            src={`src/assets/images/${externalIcons[skill]}`}
                            alt={skill}
                            className="w-4 h-4"
                          />
                        )}
                        <span className="text-xs font-bold text-rose-950 uppercase">{skill}</span>
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

export default Skills;



