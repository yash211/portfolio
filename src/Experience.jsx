const Experience = () => {
    const jobs = [
        {
            date: "February 2022",
            title: "Application UI Developer",
            company: "Tailwind Labs",
            type: "Full-time",
            duration: "February 2022 - August 2022", // Added duration
            tasks: [
                "Developed over 20+ pages including dashboard layout, charts, and kanban board.",
                "Collaborated with design teams to implement UI components in Tailwind CSS.",
                "Maintained code quality and followed best practices.",
            ],
        },
        {
            date: "March 2022",
            title: "UI/UX Designer",
            company: "Figma Design Co.",
            type: "Full-time",
            duration: "March 2022 - December 2022", // Added duration
            tasks: [
                "Designed marketing pages in Figma with a focus on consistency.",
                "Worked closely with developers to ensure parity between design and implementation.",
                "Updated designs based on user feedback and analytics.",
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
                <div className="lg:w-1/4 lg:my-40 w-full flex justify-center lg:justify-center items-center">
                    <h2 className="text-3xl font-sans font-bold italic mb-3 lg:my-20 relative">
                        <span className="relative z-10 px-4 text-black">WORK EXPERIENCE</span>
                    </h2>
                </div>
                <div className="lg:w-3/4 w-full space-y-8">
                    {jobs.map((job, index) => (
                        <div key={index} className="flex gap-x-3 pb-8 w-full">
                            <div className="lg:w-46 sm:w-20 text-end">
                                <span className="text-xs text-gray-500">{job.duration}</span>
                            </div>


                            <div className="relative after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:bg-gray-200">
                                <div className="relative z-10 size-7 flex justify-center items-center">
                                    <div className="size-2 rounded-full bg-gray-400"></div>
                                </div>
                            </div>




                            <div className="grow pt-0.5 pb-8">
                                <div className="flex justify-between items-center">
                                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                                        {job.title}
                                    </h3>
                                </div>
                                <h4 className="text-sm text-gray-600">{job.company}</h4> {/* Separate company name */}
                                <ul className="mt-1 text-sm text-gray-600 list-disc list-inside">
                                    {job.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex}>{task}</li>
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
