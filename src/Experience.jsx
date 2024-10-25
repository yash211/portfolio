const Experience = () => {
    const jobs = [
        {
            
            title: "Software Development Engineer",
            company: "Cloudesign Solution Pvt Ltd",
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
          
            title: "UI/UX Designer",
            company: "Figma Design Co.",
            type: "Full-time",
            duration: "March 2022 - December 2022", // Added duration
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
            date: "April 2022",
            title: "Frontend Developer",
            company: "E-Commerce Inc.",
            type: "Full-time",
            duration: "April 2022 - January 2023", // Added duration
            tasks: [
                "Built interactive components for e-commerce platforms using Tailwind CSS.",
                "Collaborated with backend developers to integrate APIs.",
                "Ensured cross-browser compatibility and responsiveness.",
            ],
        },
        {
            date: "June 2023",
            title: "Intern Frontend Developer",
            company: "Tech Startup",
            type: "Internship",
            duration: "June 2023 - August 2023", // Added duration
            tasks: [
                "Assisted in the development of web applications.",
                "Gained hands-on experience with frontend technologies.",
                "Participated in team meetings and contributed to discussions.",
            ],
        },
        {
            date: "August 2023",
            title: "Intern UI/UX Designer",
            company: "Creative Agency",
            type: "Internship",
            duration: "August 2023 - October 2023", // Added duration
            tasks: [
                "Supported the design team in creating user interfaces.",
                "Conducted user research and usability testing.",
                "Helped prepare presentations for clients.",
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
                                <ul className="mt-1 text-sm text-gray-600 list-disc list-inside">
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