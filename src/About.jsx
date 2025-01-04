


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faReact,
    faJsSquare,
    faNodeJs,
    faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const socialIcons = [
        { icon: faGithub, url: "https://github.com/yash211", label: "GitHub", delay: "0s" },
        { icon: faNodeJs, label: "Node.js", delay: "2s" },
        { icon: faDocker, label: "Docker", delay: "3s" },
        { icon: faJsSquare, label: "JavaScript", delay: "4s" },
        { icon: faReact, label: "React.js", delay: "1s" },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/yash211/", label: "LinkedIn", delay: "6s" },
        { icon: "src/assets/images/leetcode.png", url: "https://www.linkedin.com/in/yash211/", label: "Leetcode", delay: "5s" },
    ];

    const Icons = [
        { icon: faGithub, url: "#", label: "GitHub", delay: "0s" },
        { icon: faLinkedin, url: "#", label: "LinkedIn", delay: "1s" },
    ];

    return (
        <section className="flex items-center justify-center mt-10 pt-10 px-4 md:px-8">
            <style>
                {`
          @keyframes moveInCircle {
            0% {
              transform: rotate(0deg) translateX(60px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(60px) rotate(-360deg);
            }
          }

          .icon-rotate {
            position: absolute;
            animation: moveInCircle 8s linear infinite;
            transform-origin: 50% 50%;
          }

          .icon-rotate:hover {
            animation-play-state: paused;
          }
        `}
            </style>

            <div className="container bg-white rounded-2xl shadow-xl relative">
                <div className="flex flex-col md:flex-row items-center py-12 px-6 md:px-12 md:space-x-2">
                    {/* Profile Image Section */}
                    <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
                        <div className="relative">
                            <img
                                src="src/assets/images/profile_pic.jpg"
                                alt="Yash Gupta"
                                className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover shadow-lg border-4 border-white"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-2/3 flex flex-col justify-center items-start md:pr-24">

                        <h1 className="text-6xl font-bold mb-4 text-indigo-500">Yash Gupta</h1>
                        <p className="text-xl mb-6">
                            I'm a {" "}
                            <span className="text-blue-700 font-bold">Full Stack Developer</span>
                            and passionate about {" "}
                            <span className="text-purple-700 font-bold">Artifical Intelligence & Machine Learning</span>
                        </p>
                        <ul className="text-gray-700 space-y-4 mb-8 w-full pr-4 md:pr-8">
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 text-xl flex-shrink-0" />
                                <span className="text-lg">Developed robust backend APIs using Node.js, Django, and NestJS.</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 text-xl flex-shrink-0" />
                                <span className="text-lg">Built dynamic frontend applications with React and Next.js.</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 text-xl flex-shrink-0" />
                                <span className="text-lg">Expertise in AWS, Docker, and Oracle for cloud solutions.</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3 text-xl flex-shrink-0" />
                                <span className="text-lg">Implemented projects using NLP, Neural Networks, and predictive modeling in AI/ML.</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-4">

                            <a
                                href="src/assets/Yash_Gupta_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
                            >
                                Resume
                            </a>
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div
                    className={`${isScrolled
                        ? "fixed left-6 right-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50"
                        : "absolute right-0 top-1/2 -translate-y-1/2 z-10"
                        } transition-all duration-500`}
                >
                    {!isScrolled ? (
                        <div className="w-48 right-4 h-48 rounded-full bg-white/90 backdrop-blur-sm flex justify-center items-center relative shadow-lg">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    aria-label={social.label}
                                    className="icon-rotate w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform"
                                    style={{
                                        animationDelay: social.delay,
                                    }}
                                >
                                    {social.label === "Leetcode" ? (
                                        <img
                                            src="src/assets/images/leetcode.png"
                                            alt="LeetCode"
                                            className="text-blue-600 text-lg hover:text-blue-700 transition-colors"
                                            style={{ width: '24px', height: '24px' }}
                                            
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={social.icon}
                                            className="text-blue-600 text-lg hover:text-blue-700 transition-colors"
                                        />
                                    )}
                                </a>
                            ))}

                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {Icons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-all"
                                >
                                    <FontAwesomeIcon
                                        icon={social.icon}
                                        className="text-blue-600 text-lg hover:text-blue-700 transition-colors"
                                    />
                                </a>
                            ))}
                        </div>
                    )}
                </div>


            </div>
        </section>
    );
};

export default About;



