import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import './assets/css/project.css';

const projects = [
  {
    title: 'Automated Healthcare System',
    description: 'An AI-based chatbot system for healthcare automation to assist users.',
    technologies: ['Python', 'Flask', 'NLP'],
    link: 'https://github.com/yash211/Automated-healthcare-system-using-AI-based-Chatbot',
    image:'/images/ai_chatbot.png'
  },
  {
    title: 'Event Song Ranker',
    description: 'A MERN stack application for ranking songs posted by artists for concert use.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://github.com/yash211/eventSongRanker-fe',
  image:'/images/coming_soon.jpg'
  },
  {
    title: 'User Authentication System',
    description: 'A secure user authentication system with JWT-based token management.',
    technologies: ['TypeScript', 'Express', 'MongoDB'],
    link: 'https://github.com/yash211/user-auth-management',
  image:'/images/coming_soon.jpg'
  },
  {
    title: 'Credit Card Default Classification',
    description: 'Machine learning model to predict credit card payment defaults.',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/yash211/Credit_Card_Default_Classification',
  image:'/images/coming_soon.jpg'
  },
  {
    title: 'Celebrity Management',
    description: 'A ReactJS-based web app with Material-UI for managing celebrity details.',
    technologies: ['ReactJS', 'Material-UI', 'JavaScript'],
    link: 'https://github.com/yash211/Celebrity-Management',
  image:'/images/coming_soon.jpg'
  },
  
  {
    title: 'Score Prediction',
    description: 'A project predicting student scores based on study hours using machine learning.',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/yash211/The-Sparks-Foundation-Internship',
  image:'/images/coming_soon.jpg'
  },
  {
    title: 'Payment Gateway',
    description: 'A payment gateway application built using Django for secure transactions.',
    technologies: ['Python', 'Django'],
    link: 'https://github.com/yash211/PaymentGateway',
  image:'/images/coming_soon.jpg'
  },
  {
    title: 'Django CRUD Datatables',
    description: 'A project implementing data tables with pagination and CRUD operations using Django.',
    technologies: ['Python', 'Django', 'SQLite3'],
    link: 'https://github.com/yash211/Django-CRUD-Datatables',
  image:'/images/coming_soon.jpg'
  },
  {
    title: 'Dandelions Image Classifier',
    description: 'A CNN-based image classifier to detect dandelions in images.',
    technologies: ['Python', 'Keras', 'TensorFlow', 'Matplotlib'],
    link: 'https://github.com/yash211/Dandelions_Image_Classifier',
  image:'/images/coming_soon.jpg'
  },
  {
    title: 'Indian Cuisine Web App',
    description: 'A web application showcasing special food items from different Indian states.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/yash211/Indian_Cuisine',
  image:'/images/coming_soon.jpg'
  },
  {
    title: 'SMS Spam Detection',
    description: 'A spam detection system using Naive Bayes classifier to classify SMS messages.',
    technologies: ['Python', 'NLTK', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/yash211/SMS-spam-detection',
  image:'/images/coming_soon.jpg'
  }
  ,
  {
    title: 'School Management System',
    description: 'A school management application using PHP and the CodeIgniter framework.',
    technologies: ['PHP', 'CodeIgniter', 'MySQL'],
    link: 'https://github.com/yash211/school_management',
  image:'src/asset/images/coming_soon.jpg'
  },

];


const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="py-10 pl-9 mx-3 text-white">
      <h2 className="text-3xl font-sans font-bold italic mb-6 text-center text-black">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 project-card-content">
        {displayedProjects.map((project, idx) => (
          <div
            key={idx}
            className="relative project-card p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 project-card"
          >
            <div className="image-container">
              <img
                src={project.image}
                alt="Project Thumbnail"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex gap-2 skills-container">
                {project.technologies.map((skill, idx) => (
                  <span
                    key={idx}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="see-more-btn"
      >
        {showAll ? "Show Less" : "See More"}
      </button>
    </div>
  );
};

export default Project;
