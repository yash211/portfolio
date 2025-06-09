import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import './assets/css/project.css';

const projects = [
  {
    title: "Real-Time Multiplayer Math Game",
    description: "An interactive math game using Canvas 2D API and Socket.io, where players solve math problems in real time.",
    technologies: ["ReactJS", "Socket.io", "Canvas 2D API", "TypeScript", "Zustand"],
    link: "https://github.com/yash211/math-game",
    livelink: "https://math-game-ivory.vercel.app/",
    image: "/images/game.png"
  },
  {
  title: 'Financial Data Analysis — DBMS Final Project',
  description: 'An end-to-end financial analytics pipeline using Python, MySQL, and Tableau. The system automates financial data collection via yFinance API, stores it in a normalized MySQL database, and visualizes insights through Tableau dashboards.',
  technologies: ['Python', 'MySQL', 'Tableau', 'yFinance', 'Pandas'],
  link: 'https://github.com/yg-uwo/DBMS-Final-Project', 
  image: '/images/dbms.png' 
},
{
  title: 'Chrono Thinker',
  description: 'A Unity 2D top-down action-puzzle game that challenges players to defeat enemies using physics-based punchbags under time constraints. Features include enemy AI, health systems, and minimalist pixel art aesthetics.',
  technologies: ['Unity', 'C#', '2D Physics', 'Animator Controller', 'Raycasting'],
  link: 'https://github.com/yg-uwo/chrono-thinker',
  image: '/images/chrono.png' 
},
{
  title: 'Surface Crack Detection',
  description: 'A hybrid ML/DL system for identifying surface cracks in concrete using SVM, KNN, CNN, and Inception-based models. Achieved 99.70% accuracy using deep learning with real-world applicability.',
  technologies: ['Python', 'Scikit-learn', 'Keras', 'TensorFlow', 'OpenCV', 'PCA', 'HOG'],
  link: 'https://github.com/call-me-jot/surface-crack-detector',
  image: 'images/surface.png' 
},{
  title: 'Rent Interest Classifier',
  description: 'A machine learning pipeline for predicting renter interest levels (low, medium, high) using structured features and sentiment analysis of descriptions via RNN and DistilBERT. Achieved 95.31% accuracy using Random Forest with sentiment features.',
  technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Keras', 'NLTK', 'Optuna', 'Pandas', 'DistilBERT'],
  link: 'https://github.com/call-me-jot/ECE9063-DA-Final-Project',
  image: 'images/rent.png' 
},
  {
    title: 'Automated Healthcare System',
    description: 'An AI-based chatbot system for healthcare automation to assist users.',
    technologies: ['Python', 'Flask', 'NLP',"RestAPI"],
    link: 'https://github.com/yash211/Automated-healthcare-system-using-AI-based-Chatbot',
    image: '/images/ai_chatbot.png'
  },
  {
    title: 'Celebrity Management',
    description: 'A ReactJS-based web app with Material-UI for managing celebrity details.',
    technologies: ['ReactJS', 'Material-UI', 'JavaScript'],
    link: 'https://github.com/yash211/Celebrity-Management',
    image: '/images/celeb.jpg'
  },

  {
    title: 'Score Prediction',
    description: 'A project predicting student scores based on study hours using machine learning.',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/yash211/The-Sparks-Foundation-Internship',
    image: '/images/score.jpeg'
  },
  {
    title: 'Credit Card Default Classification',
    description: 'Machine learning model to predict credit card payment defaults.',
    technologies: ['Python', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/yash211/Credit_Card_Default_Classification',
    image: '/images/credit.jpeg'
  },
  {
    title: 'Dandelions Image Classifier',
    description: 'A CNN-based image classifier to detect dandelions in images.',
    technologies: ['Python', 'Keras', 'TensorFlow', 'Matplotlib'],
    link: 'https://github.com/yash211/Dandelions_Image_Classifier',
    image: '/images/dandelions.jpg'
  },
  {
    title: 'Indian Cuisine Web App',
    description: 'A web application showcasing special food items from different Indian states.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/yash211/Indian_Cuisine',
    image: '/images/indian_cuisine.jpg'
  },
  {
    title: 'SMS Spam Detection',
    description: 'A spam detection system using Naive Bayes classifier to classify SMS messages.',
    technologies: ['Python', 'NLTK', 'Scikit-learn', 'Pandas'],
    link: 'https://github.com/yash211/SMS-spam-detection',
    image: '/images/sms_spam.jpg'
  }
  ,
  {
    title: 'School Management System',
    description: 'A school management application using PHP and the CodeIgniter framework.',
    technologies: ['PHP', 'CodeIgniter', 'MySQL'],
    link: 'https://github.com/yash211/school_management',
    image: './images/school.jpg'
  },
  // {
  //   title: 'Event Song Ranker',
  //   description: 'A MERN stack application for ranking songs posted by artists for concert use.',
  //   technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
  //   link: 'https://github.com/yash211/eventSongRanker-fe',
  //   image: '/images/coming_soon.jpg'
  // },
  // {
  //   title: 'User Authentication System',
  //   description: 'A secure user authentication system with JWT-based token management.',
  //   technologies: ['TypeScript', 'Express', 'MongoDB'],
  //   link: 'https://github.com/yash211/user-auth-management',
  //   image: '/images/coming_soon.jpg'
  // },
  // {
  //   title: 'Payment Gateway',
  //   description: 'A payment gateway application built using Django for secure transactions.',
  //   technologies: ['Python', 'Django'],
  //   link: 'https://github.com/yash211/PaymentGateway',
  //   image: '/images/coming_soon.jpg'
  // },
  // {
  //   title: 'Django CRUD Datatables',
  //   description: 'A project implementing data tables with pagination and CRUD operations using Django.',
  //   technologies: ['Python', 'Django', 'SQLite3'],
  //   link: 'https://github.com/yash211/Django-CRUD-Datatables',
  //   image: '/images/coming_soon.jpg'
  // },
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
            {/* Links in pill-style at top-right, properly positioned within the card */}
            <div className="absolute top-2 right-2 bg-blue-100 text-black px-3 py-1 rounded-full text-xs font-bold flex gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              {project.livelink && (
                <>
                  <span className="text-gray-500">|</span>
                  <a
                    href={project.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                </>
              )}
            </div>

            <div className="image-container w-full h-48 overflow-hidden flex justify-center items-center mt-6">
              <img
                src={project.image}
                alt="Project Thumbnail"
                className="rounded-md max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 skills-container">
              {project.technologies.map((skill, idx) => (
                <span
                  key={idx}
                  className="skill-badge"
                >
                  {skill}
                </span>
              ))}
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
