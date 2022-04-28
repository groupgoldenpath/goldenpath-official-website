import "./applications.css";
import logoVipCar from '../../assets/images/logos/goldenvipcar.png'
import playstore from '../../assets/images/playstore.png'
import applestore from '../../assets/images/applestore.png'
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
            <div className="app">
                <div className="text">
                    <h1>Vai de</h1>
                    <img src={logoVipCar} alt="" />
                    <p>Este aplicativo foi desenhado para quem busca um serviço de transporte executivo presente no próprio bairro e que garanta que você e sua família serão atendidos por um motorista conhecido com segurança.</p>
                    <div className="download">
                    <img src={playstore} alt="" />
                    <img src={applestore} alt="" />
                    </div>
                </div>
                <div className="imageApp">
                    <img src={smartphone} alt="smartphone" />
                </div>
            </div>
            <div className="appCar">
            <div className="imageappCar">
                    <img src={smartphone} alt="smartphone" />
                </div>
                <div className="text">
                    <h1>Seja um Motorista</h1>
                    <img src={logoVipCar} alt="" />
                    <p>Alô Motorista 
Você sabia que na Golden Vip Car você paga somente R$1 por corrida finalizada ? 

Com a menor taxa do mercado você motorista lucra muito mais com as suas corridas.</p>
                    <div className="download">
                    <img src={playstore} alt="" />
                    </div>
                </div>
   
            </div>

            <Footer />
        </div>
    )
}

export { Aplications }