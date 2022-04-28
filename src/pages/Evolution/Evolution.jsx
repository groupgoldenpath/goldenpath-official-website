import "./evolution.css";
import logoEvolution from '../../assets/images/logos/evolution.png'
import { Topbar } from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { MarketCrypto } from "../../components/MarketCrypto/MarketCrypto";

function Evolution() {
    return (
        <div className="Evolution">
        <Topbar />
        <Navbar />
            <div className="imageEvolution">
            <img src={logoEvolution} alt="" />
            </div>
            <div className="textEvolution">
            <h1>Conheça a Evolution AI</h1>
            <p>Conheça a maior plataforma de arbitragem da atualidade! Pensando em toda a evolução do mundo e em facilitar a rotina das pessoas, com Evolution AI você multiplica seus investimentos dentro do mercado financeiro de forma clara e segura. </p>
            </div>
            <div className="buttonsEvolution">
            <a href="/contato">Cadastre-se</a>
            </div>

        <MarketCrypto />

        <Footer />
        </div>
    )
}

export { Evolution }