import "./footer.css"
import {FaTelegram, FaYoutube, FaWhatsapp, FaInstagram} from 'react-icons/fa';
import logo from '../../assets/images/logo.png'

function Footer() {
    const date = new Date();

    return (
        <div className="footer">
            <div className="blocos">
                <div className="bloco">
                    <img src={logo} alt="" />
                    <p>O Grupo Golden Path é uma empresa de soluções tecnológicas voltadas para o mercado financeiro. Com sede na cidade de Cabo Frio, Rio de Janeiro, a ídeia surgiu do empresário Cristiano Toledo, que visa proporcionar á todos o acesso ao mercado financeiro e a ferramentas de automação. </p> 
                </div>
                <div className="bloco">
                    <p>Rentabilidade</p>
                    <p>Evolution</p>
                    <p>GPX</p>
                    <p>Robôs</p>
                    <p>Sessão Chinesa</p>
                    <p>Projetos</p>
                    <p>Cursos</p>
                    <p>Aplicativos</p>
                </div>
                <div className="bloco">
                <iframe src="https://br.widgets.investing.com/top-cryptocurrencies?theme=darkTheme" width="100%" height="100%" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe>
                </div>
                <div className="bloco">
                    <input type="text" placeholder="Seu e-mail"/>
                    <button>Enviar</button>
                    <div className="social">
                        <p><FaTelegram /></p>
                        <p><FaWhatsapp /></p>
                        <p><FaInstagram /></p>
                        <p><FaYoutube /></p>
                    </div>
                </div>
            </div>
            <div className="copy">
                <div className="company">
                    <p>{date.getFullYear()} - &copy; Golden Path. Todos os direitos reservados</p>
                </div>
                <div className="dev">
                    <p>Feito por Coding.It</p>
                </div>
            </div>
        </div>
    )
}

export { Footer }