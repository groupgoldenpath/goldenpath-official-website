import Navbar from "../components/Navbar/Navbar";
import { Topbar } from "../components/Topbar/Topbar";
import { Saudation } from "../components/Saudation/Saudation";
import { Video } from "../components/Video/Video";
import { Quiz } from "../components/Quiz/Quiz";
import { Results } from "../components/Results/Results";
import { Projects } from "../components/Projects/Projects";

function Home() {
    return (
        <>
        <Topbar />
        <Navbar />
        <Saudation />
        <Video link={"https://www.youtube.com/embed/gJyqttMFHh4"} width={560} height={315}/>
        <Results />
        <Quiz />
        <Projects />
        </>
    )
}

export {Home}