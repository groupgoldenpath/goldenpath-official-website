import { Footer } from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import { Topbar } from "../../components/Topbar/Topbar"
import logoVipCar from '../../assets/images/logos/goldenvipcar.png'
import goldencast from '../../assets/images/logos/goldencast.png'
import robos from '../../assets/images/logos/robos.png'
import flyer from '../../assets/images/flyer.jpg'

import "./projects.css"
import { Video } from "../../components/Video/Video"
function Projects() {
    return (
        <div className="Projects">
        <Topbar />
        <Navbar />
        {/* Moto Shopping */}
            <div className="imageProjects">
            <img src={logoVipCar} alt="" />
            </div>
            <div className="app">
                <div className="text">
                    <h1>Golden Moto Shopping</h1>
                    <p>O Golden VIP CAR não é apenas um serviço de transporte, é o melhor aplicativo de mobilidade. Oferecemos suporte 100% eficiente com uma equipe sempre preparada e as menores taxas do mercado para o motorista e o passageiro. </p>
                </div>
                <div className="imageApp">
                    <img src={flyer} alt="smartphone" />
                </div>
            </div>


            {/* Golden Cast */}
            <div className="imageProjectsCast">
            <img src={goldencast} alt="" />
            </div>
            <div className="app">
                <div className="imageApp">
                <Video link={"https://www.youtube.com/embed/gJyqttMFHh4"} width={560} height={315}/>
                </div>
                <div className="text">
                    <h1>Golden Cast</h1>
                    <p>Este aplicativo foi desenhado para quem busca um serviço de transporte executivo presente no próprio bairro e que garanta que você e sua família serão atendidos por um motorista conhecido com segurança.</p>
                    <div className="buttonsProjects">
                <a href="/">Ir para o canal do youtube</a>
            </div>
                </div>
            </div>


                    {/* Robos de automação */}
                    <div className="imageProjects">
            <img src={robos} alt="" />
            </div>
            <div className="textProjects">
            <p>Nossos robôs de automação são totalmente personalizados e desenvolvidos com as melhores técnicas do mercado. </p>
            </div>
            <div className="coursesProjects">
            <div className="course">
                    <h2>China</h2>
                   <p>O China Bot é o mais novo lançamento do grupo! <br />
O China bot é o melhor robô de opções binárias. Esse software opera do Telegram direto para a plataforma IQ Option.  </p>
                   <a href="/">Adquirir curso</a>
                </div>
                <div className="course">
                    <h2>Forex Innovation</h2>
                <p>Robô Forex Innovation foi desenvolvido baseado na estratégia da Golden Path.</p>
                <a href="/">Adquirir curso</a>                    
                </div>
                <div className="course">
                    <h2>Renko</h2>
                    <p>Robô Renko Golden Path opera no mercado B3.  É  baseado em uns dos melhores gráficos do mercado, usado por grandes profissionais no mundo.</p>
                    <a href="/">Adquirir curso</a>
                </div>
                <div className="course">
                    <h2>Earth</h2>
                    <p>Robô Golden path Earth foi desenvolvido para MT5 (METATRADER). Este robô também funciona no mercado B3  e funciona em conta NETTING.</p>
                    <a href="/">Adquirir curso</a>
                </div>
                <div className="course">
                    <h2>PNY- Golden</h2>
                   <p>Robô PNY Golden foi desenvolvido baseado na estratégia de Rodrigo Cohen – Príncipe de Nova York.</p>
                   <a href="/">Adquirir curso</a>
                </div>

            </div>
            <div className="buttonsProjects">
                <a href="/">Saiba mais sobre nossos robôs</a>
            </div>
            <Footer />
        </div>
    )
}

export { Projects }