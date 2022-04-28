import "./applications.css";
import logoVipCar from '../../assets/images/logos/goldenvipcar.png'
import smartphone from '../../assets/images/smartphone.png'
import { Topbar } from "../../components/Topbar/Topbar";
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

function Aplications() {
    return (
        <div className="Aplications">
        <Topbar />
        <Navbar />
            <div className="imageAplications">
            <img src={logoVipCar} alt="" />
            </div>
            <div className="textAplications">
            <h1>Conheça a Golden Vip Car</h1>
            <p>O Golden VIP CAR não é apenas um serviço de transporte, é o melhor aplicativo de mobilidade. Oferecemos suporte 100% eficiente com uma equipe sempre preparada e as menores taxas do mercado para o motorista e o passageiro. </p>
            </div>
            <div className="buttonsAplications">
            <a href="/">Acessar a Aplications</a>
            </div>

            <div className="app">
                <div className="text">
                    <h1>Vai de</h1>
                    <img src={logoVipCar} alt="" />
                    <p>Este aplicativo foi desenhado para quem busca um serviço de transporte executivo presente no próprio bairro e que garanta que você e sua família serão atendidos por um motorista conhecido com segurança.</p>
                    <div className="download">
                    <img src={logoVipCar} alt="" />
                    <img src={logoVipCar} alt="" />
                    </div>
                </div>
                <div className="imageApp">
                    <img src={smartphone} alt="smartphone" />
                </div>
            </div>
            <div className="appCar">
            <div className="imageApp">
                    <img src={smartphone} alt="smartphone" />
                </div>
                <div className="text">
                    <h1>Seja um Motorista</h1>
                    <img src={logoVipCar} alt="" />
                    <p>Este aplicativo foi desenhado para quem busca um serviço de transporte executivo presente no próprio bairro e que garanta que você e sua família serão atendidos por um motorista conhecido com segurança.</p>
                    <div className="download">
                    <img src={logoVipCar} alt="" />
                    <img src={logoVipCar} alt="" />
                    </div>
                </div>
   
            </div>

            <Footer />
        </div>
    )
}

export { Aplications }