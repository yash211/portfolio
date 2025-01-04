import React, { useState } from "react";
import Slider from "react-slick";
import './assets/css/courses.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faTrophy, faCode, faCertificate, faTrophy as faLeaderboard, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const data = [
    {
        title: "Publication",
        description: "Published a paper and authored a book chapter on automated healthcare systems using AI-based chatbot.",
        paperLink: "https://link.springer.com/chapter/10.1007/978-981-99-0071-8_15",
        bookLink: "https://www.degruyter.com/document/doi/10.1515/9783110756722-011/html",
        icons: [faBook],
    },
    {
        title: "Machine Learning Hackathon",
        description: "Ranked 39th among 4,678 participants in ML hackathon organized by American Express.",
        githubLink: "https://github.com/yash211/Credit_Card_Default_Classification",
        leaderboardLink:
            "https://www.hackerearth.com/challenges/competitive/amexpert-code-lab/leaderboard/credit-card-default-risk-5-95cbc85f/",
        icons: [faTrophy],
    },
    {
        title: "Introduction to Scripting in Python",
        description: "An introductory course on scripting and automation with Python.",
        link: "src/assets/images/scripting_in_python.jpg",
        icon: faCertificate,
        skills: ["Python", "Automation"],
    },
    {
        title: "Introduction to Artificial Intelligence",
        description: "A foundational course in AI principles and methodologies.",
        link: "src/assets/images/intro_ai.jpg",
        icon: faCertificate,
        skills: ["AI", "Decision Making"],
    },
    {
        title: "Neural Networks and Deep Learning",
        description: "In-depth course on building and optimizing neural networks.",
        link: "src/assets/images/dl.jpg",
        icon: faCertificate,
        skills: ["Neural Networks", "Deep Learning"],
    },
    {
        title: "Methods for Solving Problems",
        description: "Problem-solving strategies using computational and analytical methods.",
        link: "src/assets/images/solving_problems.jpg",
        icon: faCertificate,
        skills: ["Problem-Solving", "Algorithm Design"],
    },
    {
        title: "Essential Mathematics for Machine Learning (NPTEL)",
        description: "A course focusing on the mathematical foundations required for machine learning.",
        link: "src/assets/images/essential_maths_ml.jpg",
        icon: faCertificate,
        skills: ["Linear Algebra", "Calculus"],
    },
    {
        title: "Introduction to Machine Learning (NPTEL)",
        description: "An introductory course covering machine learning concepts and algorithms.",
        link: "src/assets/images/nptel_introduction_ml.jpg",
        icon: faCertificate,
        skills: ["Regression", "Classification"],
    },
];

const Achievements = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const openModal = (imageLink) => {
        setCurrentImage(imageLink);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setCurrentImage("");
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="w-full max-w-screen-xl mx-auto p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Achievements & Courses</h2>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index} className="p-4">
                        <div
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col"
                            style={{ minHeight: "380px", height: "100%" }}
                        >
                            <div className="flex items-center justify-center h-24 bg-gradient-to-br from-indigo-100 to-indigo-200">
                                {Array.isArray(item.icons) ? (
                                    item.icons.map((icon, i) => (
                                        <FontAwesomeIcon
                                            key={i}
                                            icon={icon}
                                            className="text-indigo-600 text-3xl mx-1"
                                        />
                                    ))
                                ) : (
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className="text-indigo-600 text-3xl"
                                    />
                                )}
                            </div>
                            <div className="p-4 flex-grow">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                {/* <div className="grid grid-cols-2 gap-2">
                                    {item.paperLink && (
                                        <a
                                            href={item.paperLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-btn"
                                        >
                                            Paper
                                        </a>
                                    )}
                                    {item.bookLink && (
                                        <a
                                            href={item.bookLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-btn"
                                        >
                                            Chapter
                                        </a>
                                    )}
                                    {item.githubLink && (
                                        <a
                                            href={item.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-btn"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {item.leaderboardLink && (
                                        <a
                                            href={item.leaderboardLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-btn"
                                        >
                                            Leaderboard
                                        </a>
                                    )}
                                    {item.link && item.icon === faCertificate && (
                                        <button
                                            onClick={() => openModal(item.link)}
                                            className="custom-btn-container"
                                        >
                                            View Certificate
                                        </button>
                                    )}
                                </div> */}
                                {item.skills && (
                                    <div className="mb-4 skills-container">
                                        {item.skills.map((skill, i) => (
                                            <span key={i} className="skill-badge">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 gap-2"> {/* Ensures buttons stack in a single column */}
                                    {item.paperLink && (
                                        <a
                                            href={item.paperLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-btn w-full"
                                        >
                                            Paper
                                        </a>
                                    )}
                                    {item.bookLink && (
                                        <a
                                            href={item.bookLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-btn w-full"
                                        >
                                            Chapter
                                        </a>
                                    )}
                                    {item.githubLink && (
                                        <a
                                            href={item.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-btn w-full"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {item.leaderboardLink && (
                                        <a
                                            href={item.leaderboardLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="custom-btn w-full"
                                        >
                                            Leaderboard
                                        </a>
                                    )}
                                    {item.link && item.icon === faCertificate && (
                                        <button
                                            onClick={() => openModal(item.link)}
                                            className="custom-btn w-full"
                                        >
                                            View Certificate
                                        </button>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            {modalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl">
                        <div className="flex justify-end p-2">
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                            >
                                ✖
                            </button>
                        </div>
                        <img
                            src={currentImage}
                            alt="Certificate"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Achievements;