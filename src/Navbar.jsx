import React from 'react';

const Navbar = ({
  scrollToAbout,
  scrollToEducation,
  scrollToExperience,
  scrollToSkills,
  scrollToProjects,
  scrollToAchievements,
  scrollToContactMe
}) => {
  return (
    <div className="sticky top-0 w-full h-auto bg-black text-blue-300 p-4 z-50">
      <ul className="flex justify-center space-x-4">
        <li>
          <button
            onClick={scrollToAbout}
            className="hover:text-gray-300 cursor-pointer"
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={scrollToEducation}
            className="hover:text-gray-300 cursor-pointer"
          >
            Education
          </button>
        </li>
        <li>
          <button
            onClick={scrollToExperience}
            className="hover:text-gray-300 cursor-pointer"
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={scrollToSkills}
            className="hover:text-gray-300 cursor-pointer"
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={scrollToProjects}
            className="hover:text-gray-300 cursor-pointer"
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={scrollToAchievements}
            className="hover:text-gray-300 cursor-pointer"
          >
            Achievements
          </button>
        </li>
        <li>
          <button
            onClick={scrollToContactMe}
            className="hover:text-gray-300 cursor-pointer"
          >
            Contact Me
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
