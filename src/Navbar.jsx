import React from 'react'

const Navbar = () => {
    return (
        <div className="sticky transform -translate-y-1/4 w-full h-auto bg-black text-blue-300 p-4 top-2 left-0">
            <ul className="flex justify-center space-x-4">
                <li>
                    <a href="#about" className="hover:text-gray-300">About Me</a>
                </li>
                <li>
                    <a href="#work" className="hover:text-gray-300">Work Experience</a>
                </li>
                <li>
                    <a href="#Education" className="hover:text-gray-300">Education</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-gray-300">Projects</a>
                </li>
                <li>
                    <a href="#achievements" className="hover:text-gray-300">Achievements</a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-gray-300">Skills</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar