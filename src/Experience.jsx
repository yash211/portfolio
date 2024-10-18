import React from 'react'

const Experience = () => {
    return (
        <div className="relative w-full h-screen flex justify-between items-center p-16 bg-gray-100">

            {/* Left Section: Company Name */}
            <div className="relative flex items-center">

                <div className="pr-6">
                    <h3 className="text-xl font-bold">Company Name</h3>
                    <p className="text-md text-gray-400">Position Title</p>
                </div>
            </div>
            <div className='w-3/4'>
                <div
                    class="absolute right-0 top-0 h-full w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
            </div>
            {/* Middle Section: Timeline */}
            <div className="relative flex flex-col items-center">
                {/* Central Vertical Line */}
                <div className="absolute h-full w-px bg-gray-400"></div>

                {/* Timeline Slider */}
                <div className="relative">
                    {/* Horizontal Line for Slider */}
                    <div className="absolute top-1/2 w-full h-px bg-gray-400"></div>

                    {/* Slider Component */}
                    <input
                        type="range"
                        min="1"
                        max="12"
                        value="6"
                        className="relative z-10 appearance-none h-2 w-64 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                    />
                </div>

                {/* Popup for Achievements */}
                <div id="popup" className="absolute top-16 bg-white shadow-lg p-4 rounded-lg border border-gray-300">
                    <h4 className="text-lg font-semibold">Quarter Title</h4>
                    <ul className="text-gray-600">
                        <li>Achievement 1</li>
                        <li>Achievement 2</li>
                        <li>Achievement 3</li>
                    </ul>
                </div>
            </div>

            {/* Right Section: Skills Used */}
            <div className="relative flex items-center">
                {/* Vertical Line */}
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-400"></div>

                {/* Skills Display */}
                <div className="pl-6">
                    <div className="flex flex-col space-y-2">
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">ReactJS</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">JQuery</span>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Experience