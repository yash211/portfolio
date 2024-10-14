import Navbar from "./Navbar"

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-200 to-blue-500">
            <Navbar />
            <section className="flex items-center justify-center mt-20 mb-10 ml-20 mr-10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-lg py-8">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <img
                            src="src\assets\download.jpg"
                            alt="Your Image"
                            className="rounded-full w-64 h-64 object-cover shadow-lg"
                        />
                    </div>

                    {/* Who Am I Section */}
                    <div className="w-full md:w-1/2 md:ml-8">
                        <h2 className="text-4xl font-bold mb-4">Who Am I</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            I am a passionate software engineer with a focus on full-stack development.
                            I enjoy building responsive web applications, solving challenging problems,
                            and always aim to improve my skills. I specialize in technologies like
                            JavaScript, React, Node.js, and have a strong background in both frontend
                            and backend engineering.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home