import './projects.css'
import Slider from "react-slick";

function Projects() {

    var settings = {
        className: "slider variable-width",
        dots: false,
        arrows: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        rtl: true,
        useCSS: true,
        variableWidth: false
      };
      
    return (
        <Slider {...settings}>
        <div className="item" style={{ width: 20 }}>
            <h3>ROBÔS DE AUTOMAÇÃO</h3>
            <p>Nossos robôs de automação são totalmente personalizados e desenvolvidos com as melhores técnicas do mercado.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
        <h3>EVOLUTION AI</h3>
        <p>Conheça a maior plataforma de arbitragem da atualidade! Pensando em toda a evolução do mundo e em facilitar a rotina das pessoas, com Evolution AI você multiplica seus investimentos dentro do mercado financeiro de forma clara e segura.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
        <h3>GPX</h3>
        <p>Conheça a GPX Exchange. Diferentemente das casas de câmbio tradicionais, uma exchange só existe no ambiente digital. Sendo assim, é uma plataforma eletrônica que facilita a compra, a venda e a troca de moedas digitais e tokens.. A GPX é a exchange própria da Golden Path e possui as melhores taxas do mercado.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
        <h3>SESSÃO CHINESA</h3>
        <p>São enviados pra cada participante 2 sinais com garantia de ganho em ambos. O participante adquire seu passe, define seu valor de banca e aguarda para receber os sinais pela equipe. </p>
        </div>
        <div className="item" style={{ width: 20 }}>
        <h3>GOLDEN BET</h3>
        <p>O Golden Bet é uma sala de sinais esportivos, com o intúito de auxilar você torcedor a lucrar com os esportes que tanto gosta. </p>
        </div>
        <div className="item" style={{ width: 20 }}>
        <h3>GOLDEN CAST</h3>
        <p>O Golden Cast é o podcast do grupo Golden Path. Exibido 1 vez por semana pelo canal no YouTube, Facebook e Instagram, o projeto é um bate-papo com temas variados.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
        <h3>GOLDEN VIP CAR</h3>
        <p>O Golden VIP CAR não é apenas um serviço de transporte, é o melhor aplicativo de mobilidade. Oferecemos suporte 100% eficiente com uma equipe sempre preparada e as menores taxas do mercado para o motorista e o passageiro.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
        <h3>GOLDEN MOTO SHOPPING</h3>
        <p>A golden Moto shopping é uma venda programada, onde você aporta todo mês um valor mensal, e participa todo mês de sorteios de bens pela loteria federal, ao final do período você recebe o bem escolhido mais uma rentabilidade gerada ao decorrer dos aportes e sendo sorteado ao decorrer do período você tem seu bem quitado pelo valor já pago.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
        <h3>GOLDEN ACADEMY</h3>
        <p>O grupo Golden Path oferece 4 cursos voltados para o mercado: B3, Forex, Opções binárias e Criptomoedas. Nestes cursos os alunos aprenderão mais sobre como funcionam os mercados, como investir com mais clareza e segurança e todos os passos necessários para operar seu próprio dinheiro sem medo.</p>
        </div>
        </Slider>
    )
}

export { Projects }






