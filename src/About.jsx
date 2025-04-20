



import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faReact,
    faJsSquare,
    faNodeJs,
    faDocker,
    faPython,
    faAws

} from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle, faEnvelope, faCopy, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const About = ({ scrollToContactMe }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showEmailTooltip, setShowEmailTooltip] = useState(false);
    const [showCopySuccess, setShowCopySuccess] = useState(false);
    const [showLocationTooltip, setShowLocationTooltip] = useState(false);
    const email = "gupta.yash211@gmail.com";
    const location = "London, Ontario, Canada";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleCopyEmail = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(email);
            setShowCopySuccess(true);
            setTimeout(() => setShowCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };



    const socialIcons = [
        { icon: faGithub, url: "https://github.com/yash211", label: "GitHub" },
        { icon: faAws, label: "AWS" },
        { icon: faPython, label: "Python" },
        { icon: faJsSquare, label: "JavaScript" },
        { icon: faEnvelope, label: "Email", email: email },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/yash211/", label: "LinkedIn" },
        { icon: "/images/leetcode.png", url: "https://leetcode.com/u/yash_211/", label: "Leetcode" },
    ];

    const Icons = [
        { icon: faGithub, url: "https://github.com/yash211", label: "GitHub", delay: "0s" },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/yash211/", label: "LinkedIn", delay: "1s" },
        { icon: "/images/leetcode.png", url: "https://leetcode.com/u/yash_211/", label: "Leetcode", delay: "5s" },
        {
            icon: faEnvelope,
            label: "Email",
            email: email,
            delay: "1s"
        },
        { icon: faMapMarkerAlt, label: "Location", location: location, delay: "4s" },
    ];

    // const EmailTooltip = ({ email, onCopy, className = "" }) => (
    //     <div className={`${className} bg-purple-100 text-black px-4 py-2 rounded-lg shadow-lg flex items-center gap-3 backdrop-blur-sm border border-gray-100`}>
    //         <span className="font-medium">{email}</span>
    //         <button
    //             onClick={onCopy}
    //             className="hover:bg-gray-700 p-2 rounded-full transition-colors"
    //             title="Copy email"
    //         >
    //             <FontAwesomeIcon icon={faCopy} className="text-gray-300 hover:text-white" />
    //         </button>
    //     </div>
    // );

    const EmailTooltip = ({ email, onCopy, className = "", hideButton = false }) => (
        <div className={`${className} bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-3 backdrop-blur-sm border border-gray-700`}>
            <span className="font-medium">{email}</span>
            {!hideButton && (
                <button
                    onClick={onCopy}
                    className="hover:bg-gray-700 p-2 rounded-full transition-colors"
                    title="Copy email"
                >
                    <FontAwesomeIcon icon={faCopy} className="text-gray-300 hover:text-white" />
                </button>
            )}
        </div>
    );

    const LocationTooltip = ({ location, className = "" }) => (
        <div className={`${className} bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-3 backdrop-blur-sm border border-gray-700`}>
            <span className="font-medium">{location}</span>
        </div>
    );

    // const CopySuccessMessage = ({ className = "" }) => (
    //     <div className={`${className} bg-green-500 text-white px-2 py-0 rounded-lg shadow-lg flex items-center`}>
    //         <span>Email copied!</span>
    //     </div>
    // );

    return (
        <section className="flex items-center justify-center pt-10 px-4 md:px-8">
            <style>
                {`
                    @keyframes moveInCircle {
                        from {
                            transform: rotate(0deg) translateX(60px) rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg) translateX(60px) rotate(-360deg);
                        }
                    }

                    .icon-container {
                        position: relative;
                        width: 120px;
                        height: 120px;
                    }

                    .icon-wrapper {
                        position: absolute;
                        width: 40px;
                        height: 40px;
                        left: 50%;
                        top: 50%;
                        margin-left: -20px;
                        margin-top: -20px;
                    }

                    .icon-wrapper:nth-child(1) { animation: moveInCircle 8s linear infinite; }
                    .icon-wrapper:nth-child(2) { animation: moveInCircle 8s linear infinite 1.14s; }
                    .icon-wrapper:nth-child(3) { animation: moveInCircle 8s linear infinite 2.28s; }
                    .icon-wrapper:nth-child(4) { animation: moveInCircle 8s linear infinite 3.42s; }
                    .icon-wrapper:nth-child(5) { animation: moveInCircle 8s linear infinite 4.56s; }
                    .icon-wrapper:nth-child(6) { animation: moveInCircle 8s linear infinite 5.70s; }
                    .icon-wrapper:nth-child(7) { animation: moveInCircle 8s linear infinite 6.84s; }

                    .icon-wrapper:hover {
                        animation-play-state: paused;
                    }

                    .icon-content {
                        width: 100%;
                        height: 100%;
                    }

                    @media (max-width: 768px) {
                        .circlecontainer {
                            display: none;
                        }
                    }
                `}
            </style>

            <div className="container bg-white rounded-2xl shadow-xl relative">
                <div className="flex flex-col md:flex-row items-center py-12 px-6 md:px-12 md:space-x-2">

                    <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
                        <div className="relative">
                            <img
                                src="/images/profile_pic.jpg"
                                alt="Yash Gupta"
                                className=" md:w-56 md:h-56 object-cover shadow-lg border-4 border-white"
                            />
                        </div>
                    </div>


                    <div className="w-full md:w-2/3 flex flex-col justify-center items-start md:pr-24">
                        <h1 className="text-6xl font-bold mb-4 text-indigo-500">Yash Gupta</h1>
                        <p className="text-xl mb-6">
                            I'm a {" "}
                            <span className="text-blue-700 font-bold">Full Stack Developer</span>{" "}
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
                                href="/Yash_Gupta_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
                            >
                                Resume
                            </a>
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
                                onClick={scrollToContactMe}
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>


                <div
                    className={`${isScrolled
                        ? "fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40"
                        : "absolute right-0 top-1/2 -translate-y-1/2 z-10"
                        } transition-all duration-500`}
                >
                    {!isScrolled ? (
                        
                        <div className="circlecontainer w-48 right-4 h-48 rounded-full bg-white/90 backdrop-blur-sm flex justify-center items-center relative shadow-lg">
                            <div className="icon-container">
                                {socialIcons.map((social, index) => (
                                    <div key={index} className="icon-wrapper">
                                        <div className="icon-content">
                                            <a
                                                href={social.url}
                                                onClick={social.email ? (e) => e.preventDefault() : undefined}
                                                aria-label={social.label}
                                                className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform"
                                                onMouseEnter={() => social.email && setShowEmailTooltip(true)}
                                                onMouseLeave={() => social.email && setShowEmailTooltip(false)}
                                            >
                                                {social.label === "Leetcode" ? (
                                                    <img
                                                        src="/images/leetcode.png"
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
                                            {social.email && showEmailTooltip && (
                                                <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                                                    <EmailTooltip 
                                                        email={social.email} 
                                                        onCopy={handleCopyEmail}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {Icons.map((social, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    
                                    onMouseEnter={() => {
                                        if (social.email) setShowEmailTooltip(true);
                                        if (social.location) setShowLocationTooltip(true);
                                    }}
                                    onMouseLeave={() => {
                                        if (social.email) setShowEmailTooltip(false);
                                        if (social.location) setShowLocationTooltip(false);
                                    }}
                                >
                                    <a
                                        href={social.url}
                                        onClick={social.email ? (e) => e.preventDefault() : undefined}
                                        aria-label={social.label}
                                        className="w-10 h-10 bg-white rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-all"
                                    >
                                        {social.label === "Leetcode" ? (
                                            <img
                                                src="/images/leetcode.png"
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
                                    {social.email && showEmailTooltip && (
                                        <div className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap">
                                            <EmailTooltip
                                                email={social.email}
                                                onCopy={handleCopyEmail}
                                            />
                                        </div>
                                    )}
                                    {social.location && showLocationTooltip && (
                                        <div className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap">
                                            <EmailTooltip
                                                email={social.location}
                                                hideButton={true} // Add this prop to EmailTooltip
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    {/* {showCopySuccess && (
                        <CopySuccessMessage className={`absolute ${isScrolled ? 'left-12 top-1/2 -translate-y-1/2' : '-top-16 left-1/2 -translate-x-1/2'}`} />
                    )} */}
                </div>
            </div>
        </section>
    );
};

export default About;
