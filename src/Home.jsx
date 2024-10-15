import Navbar from "./Navbar"

function Home() {
    return (
        <div className="">
            <Navbar />
            <section className="flex items-center justify-center m-10 min-h-screen bg-gradient-to-r from-teal-200 to-blue-500">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center bg-gray-100 shadow-lg py-8">
                    {/* Image Section */}
                    <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
                        <img
                            src="src\assets\profile_pic.jpg"
                            alt="Your Image"
                            className="rounded-full w-64 h-64 object-cover shadow-lg"
                        />
                    </div>

                    {/* Who Am I Section */}
                    <div className="w-full md:w-1/2 md:ml-8">
                        {/* <h2 className="text-4xl font-bold mb-4">Hi,I am YASH GUPTA</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            I am a passionate software engineer with a focus on full-stack development.
                            I enjoy building responsive web applications, solving challenging problems,
                            and always aim to improve my skills. I specialize in technologies like
                            JavaScript, React, Node.js, and have a strong background in both frontend
                            and backend engineering.
                        </p> */}
                        <section className="flex items-center justify-center py-12">
                            <div className="container mx-auto px-4 bg-gray-100 rounded-lg p-8 shadow-lg">
                                <h2 className="text-4xl font-bold mb-8 ml-0">Who Am I</h2>
                                <div className="space-y-6">
                                    {/* Question 1 */}
                                    <div className="group">
                                        <h3 className="text-2xl font-semibold group-hover:text-blue-500 transition-all duration-300">
                                            What do I do?
                                        </h3>
                                        <p className="text-xl font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            HIRE ME
                                        </p>
                                    </div>
                                    {/* Question 2 */}
                                    <div className="group">
                                        <h3 className="text-2xl font-semibold group-hover:text-blue-500 transition-all duration-300">
                                            Why should you hire me?
                                        </h3>
                                        <p className="text-xl font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            HIRE ME
                                        </p>
                                    </div>
                                    {/* Add more questions similarly */}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home