import About from "./About"
import Education from "./Education"
import Experience from "./Experience"
import Navbar from "./Navbar"

function Home() {
    return (
        <div className="">
            <Navbar />
            <div className="min-h-screen w-full bg-gradient-to-r from-teal-200 to-blue-500">
                <About />
                <Education/>
                <Experience/>
            </div>
        </div>
    )
}

export default Home