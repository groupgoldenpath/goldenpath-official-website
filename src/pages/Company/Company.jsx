import "./company.css"
import smartphone from '../../assets/images/smartphone.png'
import ceo from '../../assets/images/ceo.jpg'
import { Footer } from "../../components/Footer/Footer"
import { Topbar } from "../../components/Topbar/Topbar"
import Navbar from "../../components/Navbar/Navbar"
function Company() {
    return (
        <div className="company">
            <Topbar />
            <Navbar />
            <div className="text">
                <h1>Conheça a golden path</h1>
                <p>O Grupo Golden Path é uma empresa de soluções tecnológicas voltadas para o mercado financeiro. Com sede na cidade de Cabo Frio, Rio de Janeiro, a ídeia surgiu do empresário Cristiano Toledo, que visa proporcionar á todos o acesso ao mercado financeiro e a ferramentas de automação. </p>
            </div>
            <div className="certificate">
                <div className="image">
                        <img src={smartphone} alt="Certificados golden path" />
                </div>
                <div className="text">
                    <h2>Certificados</h2>
              <p>Aliquam ullamcorper tempus est, ac ullamcorper nisi. Nullam bibendum dictum ante a convallis. Mauris tempus elit vitae varius convallis. Proin mattis urna a ipsum blandit, vel laoreet arcu fermentum. Proin ornare sem at mauris fringilla ultrices. In elit ex, consectetur ut lacus id, feugiat eleifend nunc. Phasellus tristique, ipsum sit amet semper dignissim, est nulla pharetra mi, a finibus lectus lacus sed purus.</p>
                </div>
            </div>
            <div className="ceo">
                <div className="text">
             <h2>Nosso fundador</h2>
                </div>
                <div className="image">
                <img src={ceo} alt="Certificados golden path" />
                </div>
                <div className="text">
              <p>Aliquam ullamcorper tempus est, ac ullamcorper nisi. Nullam bibendum dictum ante a convallis. Mauris tempus elit vitae varius convallis. Proin mattis urna a ipsum blandit, vel laoreet arcu fermentum. Proin ornare sem at mauris fringilla ultrices. In elit ex, consectetur ut lacus id, feugiat eleifend nunc. Phasellus tristique, ipsum sit amet semper dignissim, est nulla pharetra mi, a finibus lectus lacus sed purus.</p>
                </div>
            </div>
            <div className="atributes">
                <div className="text">
                    <h3>Missão</h3>
                    <p>Desenvolver projetos inovadores, acreditamos que a educação financeira e a tecnologia podem mudar vidas.</p>
                </div>
                <div className="text">
                    <h3>Visão</h3>
                    <p>Ser a número um no nosso mercado, conquistando espaço nacional e expandindo nossa marca até virarmos uma enorme franquia.</p>
                </div>
                <div className="text">
                    <h3>Valores</h3>
                    <p>Respeito à diversidade, colaboração, inovação, compromisso com nosssos clientes e parceiros, confiança e paixão com foco nos resultados.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export { Company }