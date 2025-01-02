import About from "./About"
import Achievements from "./Achievements"
import Education from "./Education"
import Experience from "./Experience"
import Navbar from "./Navbar"
import Project from "./Project"
import Skills from "./Skills"

function Home() {
    return (
        <div className="">
            <Navbar />
            <div className="min-h-screen w-full bg-gradient-to-r from-indigo-200 from-10% via-green-200 via-30% to-blue-300 to-90%">
                <About />
                <Education/>
                <Experience/>
                <Skills/>
                <Project/>
                <Achievements/>
            </div>
        </div>
    )
}

export default Home