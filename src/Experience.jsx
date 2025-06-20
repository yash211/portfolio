import React, { useState } from "react";
const Experience = () => {
    const [showAward, setShowAward] = useState({ visible: false, award: null });

    const closeModal = () => {
        setShowAward({ visible: false, award: null })
    };

    const jobs = [
        {

            title: "Software Development Engineer-I",
            company: "Cloudesign Solution PVT LTD",
            type: "Contract-Part Time",
            duration: "September 2024 - April 2025",
            tasks: [
                "Developed robust backend APIs for the invoicing and billing module of a logistics application, ensuring high performance and scalability.",
                "Mentored new team members to enhance their expertise in NestJS and ReactJS",
                "Designed and implemented user-role-based functionalities, including middleware filters and access restrictions, to streamline operations such as trip and indent creation, ensuring secure and role-appropriate data visibility"
            ],
        },
        {
            title: "Software Development Engineer-I",
            company: "Cloudesign Solution PVT LTD",
            type: "Full-time",
            duration: "July 2023 - August 2024",
            awards: [{
                "name": "Rising Star Award",
                "url": "/images/rs.jpg"
            },
            {
                "name": "Employee Of The Month Award",
                "url": "/images/emp.jpg"
            }],
            tasks: [
                "Developed reusable and efficient React components and forms, enhancing the user interface and improving overall user experience for the CloudTrack application.",
                "Utilized TypeScript and NestJS to design and implement over 30 RESTful APIs, optimizing performance and scalability of backend services.",
                "Managed AWS S3 bucket storage by implementing pre-signed URLs for secure access, ensuring efficient data handling and retrieval.",
                "Led a cross-functional team in designing and executing a new module for a key customer, facilitating client meetings and sprint planning to gather requirements and feedback.",
                "Designed backend architecture and configured AWS services for the secondary freight feature of the CloudTrack application, contributing to improved functionality.",
                "Conducted 20+ technical interviews for Python, MongoDB, and ReactJS positions, contributing to the hiring process and building a strong development team.",
                "Designed and implemented a backend system using Django and Python to optimize API response times, reducing latency from minutes to seconds, significantly enhancing application performance for Bamboo HR."
            ],
        },
        {

            title: "Software Development Engineer",
            company: "Decimal Points Analytics PVT LTD",
            type: "Full-time",
            duration: "June 2022 - July 2023",
            tasks: [
                "Built a dynamic web application with Django, leveraging jQuery and HTML for an interactive UI.",
                "Gained foundational knowledge in blockchain technology and the Hedera SDK, focusing on API integration.",
                "Developed and optimized Python scripts to support backend workflows.",
                "Integrated APIs with ReactJS to visualize complex data with interactive, responsive graphs with Recharts and charts.js.",
                "Resolved critical defects in multiple modules, demonstrating a quick learning curve with unfamiliar codebases",
                "Collaborated in agile sprints to deliver full stack features on schedule, balancing front-end and back-end tasks, addressing feedback, and iterating rapidly to meet evolving project needs."
            ],
        },
        {
            title: "Data Science And Business Analytics Intern",
            company: "The Sparks Foundation",
            type: "Internship",
            duration: "June 2021 - July 2021",
            tasks: [
                "Conducted comprehensive data analysis using Python libraries (e.g., Pandas, Matplotlib) to extract meaningful insights from the dataset.",
                "Gained proficiency in supervised learning techniques, including regression methods, to analyze datasets and predict outcomes effectively.",
                "Enhanced technical skills in Python programming, data manipulation, and visualization techniques, alongside tools like Jupyter Notebooks for interactive coding",
            ],
            awards: [{
                "name": "Completion Certificate",
                "url": "/images/tsf.png"
            }],
        },
        {
            title: "Web Development Intern",
            company: "E-Svadhyaya",
            type: "Internship",
            duration: "May 2021 - June 2021",
            tasks: [
                "Created a comprehensive school management system through codeigniter(core PHP framework) with core functionalities including student records, teacher profiles, and class management, utilizing a full-stack tech stack.",
                "Configured and optimized a relational database schema for efficient data storage and retrieval, allowing seamless handling of school-related records.",
                "Integrated secure user authentication and role-based authorization to manage access rights for students, teachers, and administrators.",
                "Conducted testing and debugging to ensure reliability, scalability, and security of the application, preparing it for real-world deployment in a school environment.",
                "Managed code versions using Git, enabling collaborative work with peers and showcasing the project on GitHub.",

            ],
            awards: [{
                "name": "Letter Of Recommendation",
                "url": "/images/lor_web.png"
            }],
        },
        {
            title: "Flutter Developer",
            company: "Cometa Intellect LLP",
            type: "Internship",
            duration: "October 2020 - November 2020",
            tasks: [
                "Wrote efficient and maintainable Dart code within the Flutter framework to develop features for a diagnostic billing application, enhancing functionality and user experience.",
                "Conducted thorough testing of the application to identify and resolve bugs, ensuring a smooth user experience and high-quality performance."
            ],
            awards: [{
                "name": "Completion Certificate",
                "url": "/images/cometa.png"
            }],
        },

    ];

   
    const keywords = [
        "NestJS",
        "ReactJS",
        "AWS S3",
        "TypeScript",
        "RESTful APIs",
        "Django",
        "Python",
        "React components",
        "AWS",
        "MongoDB",
        "jQuery",
        "Hedera SDK",
        "blockchain",
        "HTML",
        "Recharts",
        "chart.js",
        "codeigniter",
        "PHP",
        "Git",
        "GitHub",
        "Dart",
        "Flutter"
    ];

    const highlightKeywords = (text) => {
        const regex = new RegExp(`(${keywords.join("|")})`, "gi");
        return text.split(regex).map((part, index) =>
            regex.test(part) ? (
                <span key={index} className="text-blue-500 font-semibold">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <section className="py-10 pl-9 mx-3 text-white">
            <h2 className="text-3xl font-sans font-bold italic mb-6 text-center text-black">
                Work Experience
            </h2>
            <div className="container mx-auto px-4 flex flex-col space-y-12">
                <div className="space-y-8">
                    {jobs.map((job, index) => (
                        <div key={index} className="flex flex-col lg:flex-row gap-x-6 pb-8">
                            <div className="lg:w-1/6 text-center">
                                <span className="block text-lg font-bold text-blue-400 p-1 rounded">
                                    {job.duration}
                                </span>
                                <span className="block text-sm font-medium text-blue-900">
                                    {job.type}
                                </span>
                                {job.awards &&
                                    job.awards.map((award, awardIndex) => (
                                        <button
                                            key={awardIndex}
                                            onClick={() =>
                                                setShowAward({ visible: true, award })
                                            }
                                            className="mt-2 custom-btn"
                                        >
                                            View {award.name}
                                        </button>
                                    ))}
                            </div>
                            <div className="lg:w-5/6">
                                <h3 className="font-bold text-lg text-violet-800">{job.title}</h3>
                                <h4 className="text-lg text-rose-900">{job.company}</h4>
                                <ul className="mt-2 pt-2 text-sm text-gray-700 list-disc list-inside">
                                    {job.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex} className="text-lg">
                                            {highlightKeywords(task)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showAward.visible && (
               
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
                            src={showAward.award.url}
                            alt={showAward.award.name}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Experience;