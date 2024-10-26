const Experience = () => {
    const jobs = [
        {

            title: "Software Development Engineer-I",
            company: "Cloudesign Solution PVT LTD",
            type: "Full-time",
            duration: "July 2023 - Current",
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
                "Integrated APIs with React.js to visualize complex data with interactive, responsive graphs with Recharts and charts.js.",
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
        },
        {
            title: "Web Development Intern",
            company: "E-Svadhyaya",
            type: "Internship",
            duration: "May 2021 - June 2021",
            tasks: [
                "Created a comprehensive school management system with core functionalities including student records, teacher profiles, and class management, utilizing a full-stack tech stack.",
                "Configured and optimized a relational database schema for efficient data storage and retrieval, allowing seamless handling of school-related records.",
                "Integrated secure user authentication and role-based authorization to manage access rights for students, teachers, and administrators.",
                "Conducted testing and debugging to ensure reliability, scalability, and security of the application, preparing it for real-world deployment in a school environment.",
                "Managed code versions using Git, enabling collaborative work with peers and showcasing the project on GitHub.",
               
            ],
        },
        {
            title: "Flutter Developer",
            company: "Cometa Intellect LLP",
            type: "Internship",
            duration: "June 2023 - August 2023",
            tasks: [
                "Wrote efficient and maintainable Dart code within the Flutter framework to develop features for a diagnostic billing application, enhancing functionality and user experience.",
                "Conducted thorough testing of the application to identify and resolve bugs, ensuring a smooth user experience and high-quality performance."
            ],
        },
        
    ];

    return (
        <section className="flex items-center justify-center mt-10 text-white">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start lg:space-x-12 space-y-12 lg:space-y-0">
                <div className="lg:w-1/4 lg:my-40 w-full h-full flex justify-center lg:justify-center items-center">
                    <h2 className="text-3xl font-sans font-bold italic mb-3 lg:py-40 relative">
                        <span className="relative z-10 px-4 text-black">WORK EXPERIENCE</span>
                    </h2>
                </div>
                <div className="lg:w-3/4 w-full space-y-8">
                    {jobs.map((job, index) => (
                        <div key={index} className="flex gap-x-1 pb-8 w-full">
                            <div className="lg:w-24 md-24 sm-10 text-left">
                                <span className="text-xs font-bold text-neutral-900">{job.duration}</span>
                            </div>


                            <div className="relative after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:bg-gray-200">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                    <div className="size-2 rounded-full bg-gray-400"></div>
                                </div>
                            </div>




                            <div className="lg:w-3/4 md-w-1/2 sm:w-full pl-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="flex gap-x-1.5 font-bold text-lg text-violet-800">
                                        {job.title}
                                    </h3>
                                </div>
                                <h4 className="text-lg text-rose-900">{job.company}</h4>
                                <ul className="mt-1 pt-2 text-sm text-gray-600 list-disc list-inside">
                                    {job.tasks.map((task, taskIndex) => (
                                        <li className="text-md text-black" key={taskIndex}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;