import "./gpx.css";
import logoGPX from '../../assets/images/logos/gpx.png'
import { Market } from "../../components/Market/Market";
import { Topbar } from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

function GPX() {
    return (
        <div className="gpx">
        <Topbar />
        <Navbar />
            <div className="imageGpx">
            <img src={logoGPX} alt="" />
            </div>
            <div className="textGpx">
            <h1>Conheça a GPX Exchange</h1>
            <p>Diferentemente das casas de câmbio tradicionais, uma exchange só existe no ambiente digital. Sendo assim, é uma plataforma eletrônica que facilita a compra, a venda e a troca de moedas digitais e tokens.. A GPX é a exchange própria da Golden Path e possui as melhores taxas do mercado. </p>
            </div>
            <div className="buttonsGpx">
            <a href="/">Acessar a GPX</a>
            </div>

        <Market />

        <Footer />
        </div>
    )
}

export { GPX }