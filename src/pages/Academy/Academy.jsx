import "./academy.css";
import logoAcademy from '../../assets/images/logos/academy.png'
import { Market } from "../../components/Market/Market";
import { Topbar } from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

function Academy() {
    return (
        <div className="Academy">
        <Topbar />
        <Navbar />
            <div className="imageAcademy">
            <img src={logoAcademy} alt="" />
            </div>
            <div className="textAcademy">
            <h1>Conheça a Academy Exchange</h1>
            <p>O grupo Golden Path oferece 4 cursos voltados para o mercado: B3, Forex, Opções binárias e Criptomoedas. Nestes cursos os alunos aprenderão mais sobre como funcionam os mercados, como investir com mais clareza e segurança e todos os passos necessários para operar seu próprio dinheiro sem medo.</p>
            </div>
            <div className="coursesAcademy">
                <div className="course">
                    <h2>B3</h2>
                <p>Vivamus sit amet magna purus. Donec ultricies dictum arcu in auctor. Nam non gravida purus. Ut maximus libero non orci vulputate, et molestie justo commodo.</p>
                <a href="/">Adquirir curso</a>                    
                </div>
                <div className="course">
                    <h2>Forex</h2>
                    <p>Vivamus sit amet magna purus. Donec ultricies dictum arcu in auctor. Nam non gravida purus. Ut maximus libero non orci vulputate, et molestie justo commodo.</p>
                    <a href="/">Adquirir curso</a>
                </div>
                <div className="course">
                    <h2>Opções binárias</h2>
                    <p>Vivamus sit amet magna purus. Donec ultricies dictum arcu in auctor. Nam non gravida purus. Ut maximus libero non orci vulputate, et molestie justo commodo.</p>
                    <a href="/">Adquirir curso</a>
                </div>
                <div className="course">
                    <h2>Criptomoedas</h2>
                    <p>Vivamus sit amet magna purus. Donec ultricies dictum arcu in auctor. Nam non gravida purus. Ut maximus libero non orci vulputate, et molestie justo commodo.</p>
                    <a href="/">Adquirir curso</a>
                </div>
            </div>

        <Footer />
        </div>
    )
}

export { Academy }