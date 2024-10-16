import About from "./About"
import Education from "./Education"
import Navbar from "./Navbar"

function Home() {
    return (
        <div className="">
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-teal-200 to-blue-500">
                <About />
                <Education/>
            </div>
        </div>
    )
}

export default Home