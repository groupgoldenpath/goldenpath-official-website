import Navbar from "../components/Navbar/Navbar";
import { Topbar } from "../components/Topbar/Topbar";
import { Saudation } from "../components/Saudation/Saudation";
import { Video } from "../components/Video/Video";
import { Quiz } from "../components/Quiz/Quiz";
import { Results } from "../components/Results/Results";
import { Projects } from "../components/Projects/Projects";
import "./home.css"
import { PreRegistration } from "../components/PreRegistration/PreRegistration";
import { Footer } from "../components/Footer/Footer";
import { Market } from "../components/Market/Market";

function Home() {
    return (
        <>
        <Topbar />
        <Navbar />
        <Saudation />
        <Video link={"https://www.youtube.com/embed/gJyqttMFHh4"} width={560} height={315}/>
        <Quiz />
        <Projects />
        <PreRegistration />
        <Market />
        <Footer />
        </>
    )
}

export {Home}