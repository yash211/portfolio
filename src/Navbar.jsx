// import React from 'react';

// const Navbar = ({
//   scrollToAbout,
//   scrollToEducation,
//   scrollToExperience,
//   scrollToSkills,
//   scrollToProjects,
//   scrollToAchievements,
//   scrollToContactMe
// }) => {
//   return (
//     <div className="sticky top-0 w-full h-auto bg-black text-blue-300 p-4 z-50">
//       <ul className="flex justify-center space-x-4">
//         <li>
//           <button
//             onClick={scrollToAbout}
//             className="hover:text-gray-300 cursor-pointer"
//           >
//             About Me
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={scrollToEducation}
//             className="hover:text-gray-300 cursor-pointer"
//           >
//             Education
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={scrollToExperience}
//             className="hover:text-gray-300 cursor-pointer"
//           >
//             Experience
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={scrollToSkills}
//             className="hover:text-gray-300 cursor-pointer"
//           >
//             Skills
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={scrollToProjects}
//             className="hover:text-gray-300 cursor-pointer"
//           >
//             Projects
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={scrollToAchievements}
//             className="hover:text-gray-300 cursor-pointer"
//           >
//             Achievements
//           </button>
//         </li>
//         <li>
//           <button
//             onClick={scrollToContactMe}
//             className="hover:text-gray-300 cursor-pointer"
//           >
//             Contact Me
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';

const Navbar = ({
  scrollToAbout,
  scrollToEducation,
  scrollToExperience,
  scrollToSkills,
  scrollToProjects,
  scrollToAchievements,
  scrollToContactMe
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About Me', action: scrollToAbout },
    { name: 'Education', action: scrollToEducation },
    { name: 'Experience', action: scrollToExperience },
    { name: 'Skills', action: scrollToSkills },
    { name: 'Projects', action: scrollToProjects },
    { name: 'Achievements', action: scrollToAchievements },
    { name: 'Contact Me', action: scrollToContactMe },
  ];

  const handleNavItemClick = (action) => {
    action();
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 w-full bg-black text-blue-300 p-4 z-50">
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center space-x-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => item.action()}
              className="hover:text-gray-300 cursor-pointer transition-colors duration-200"
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-300 hover:text-gray-300 transition-colors duration-200 h-6 w-6 relative"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // X icon
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="block w-5 h-0.5 bg-current rotate-45 absolute"></span>
              <span className="block w-5 h-0.5 bg-current -rotate-45 absolute"></span>
            </span>
          ) : (
            // Hamburger icon
            <span className="absolute inset-0 flex flex-col items-center justify-center space-y-1.5">
              <span className="block w-5 h-0.5 bg-current"></span>
              <span className="block w-5 h-0.5 bg-current"></span>
              <span className="block w-5 h-0.5 bg-current"></span>
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black border-t border-blue-900">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <button
                  onClick={() => handleNavItemClick(item.action)}
                  className="w-full text-center py-2 hover:bg-blue-900 hover:text-gray-300 transition-colors duration-200"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

