import React from 'react'

const Education = () => {
  return (
    <section className="flex items-center pd-10 justify-center mt-10 text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start lg:space-x-12 space-y-12 lg:space-y-0">
        {/* Title Section */}
        <div className="lg:w-1/4 lg:my-40 w-full flex justify-center lg:justify-center items-center">
          <h2 className="text-3xl font-sans hover:font-serif font-bold italic mb-3 lg:my-20 relative">
            <span className="relative z-10 px-4 text-black">EDUCATION</span>
          </h2>
        </div>


        {/* Cards Section */}
        <div className="lg:w-3/4 w-full space-y-8">
          {/* Card 1 */}
          <div className="relative bg-gradient-to-br from-red-100 to-gray-200 p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 border border-blue-500">
            <div className="absolute -top-3 right-3 bg-red-100 text-black px-3 py-1 rounded-full text-xs font-bold">
              September 2024-August 2025
            </div>
            <h3 className="text-xl font-bold text-fuchsia-800">Western University</h3>
            <p className="text-md text-green-900 mb-4">London,Ontario,Canada</p>
            <p className="text-md font-bold text-red-900 mb-4 uppercase">Master's in Software Engineering</p>
            <hr class="w-full h-0.5 bg-gray-500 border-0 rounded dark:bg-gray-900"></hr>
            <p className="text-lg text-orange-900 pt-4">Relevant Courses: <span className='text-gray-900'>Data Analytics,Web Technologies,Database Management & Appilication,Cloud Computing,Hacking,Machine Learning</span></p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gradient-to-br from-red-100 to-gray-200 p-6 lg:p-8 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300 border border-blue-500">
            <div className="absolute -top-3 right-3 bg-red-100 text-black px-3 py-1 rounded-full text-xs font-bold">
              July 2018-August 2022
            </div>
            <h3 className="text-xl font-bold text-fuchsia-800">Thakur College Of Engineering and Technology</h3>
            <p className="text-md text-green-900 mb-4">Mumbai,Maharashtra,India</p>
            <p className="text-md font-bold text-red-900 uppercase">Bachelor's in Computer Engineering</p>
            <p className="text-sm text-gray-700 mb-4">GPA: 8.71/10</p>
            <hr class="w-full h-0.5 bg-gray-500 border-0 rounded dark:bg-gray-900"></hr>
            <p className="text-lg text-orange-900 pt-4">Relevant Courses: <span className='text-gray-900'>Data Structure & Algorithms,Mobile Computing,Operating Systems,Computer Networks,Computer Graphics,Software Architecture,Introduction to Intelligent System,Deep Learning,Natural Language Processing</span></p>

          </div>
        </div>
      </div>
    </section>

  )
}

export default Education