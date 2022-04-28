import './projects.css'
import Slider from "react-slick";
import goldencast from '../../assets/images/logos/goldencast.png';
import robos from '../../assets/images/logos/robos.png';
import evolution from '../../assets/images/logos/evolution.png';
import gpx from '../../assets/images/logos/gpx.png';
import sessaochinesa from '../../assets/images/logos/sessaochinesa.png';
import goldenbet from '../../assets/images/logos/goldenbet.png';
import goldenvipcar from '../../assets/images/logos/goldenvipcar.png';
import academy from '../../assets/images/logos/academy.png';


function Projects() {

    var settings = {
        className: "slider variable-width",
        dots: false,
        arrows: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2000,
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
            <img src={robos} alt="logoCast" />
            <p>Nossos robôs de automação são totalmente personalizados e desenvolvidos com as melhores técnicas do mercado.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
         <img src={evolution} alt="logoCast" />
        <p>Conheça a maior plataforma de arbitragem da atualidade! Pensando em toda a evolução do mundo e em facilitar a rotina das pessoas, com Evolution AI você multiplica seus investimentos dentro do mercado financeiro de forma clara e segura.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
         <img src={gpx} alt="logoCast" />
        <p>Conheça a GPX Exchange. Diferentemente das casas de câmbio tradicionais, uma exchange só existe no ambiente digital. Sendo assim, é uma plataforma eletrônica que facilita a compra, a venda e a troca de moedas digitais e tokens.. A GPX é a exchange própria da Golden Path e possui as melhores taxas do mercado.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
         <img src={sessaochinesa} alt="logoCast" />
        <p>São enviados pra cada participante 2 sinais com garantia de ganho em ambos. O participante adquire seu passe, define seu valor de banca e aguarda para receber os sinais pela equipe. </p>
        </div>
        <div className="item" style={{ width: 20 }}>
         <img src={goldenbet} alt="logoCast" />
        <p>O Golden Bet é uma sala de sinais esportivos, com o intúito de auxilar você torcedor a lucrar com os esportes que tanto gosta. </p>
        </div>
        <div className="item" style={{ width: 20 }}>
         <img src={goldencast} alt="logoCast" />
        <p>O Golden Cast é o podcast do grupo Golden Path. Exibido 1 vez por semana pelo canal no YouTube, Facebook e Instagram, o projeto é um bate-papo com temas variados.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
         <img src={goldenvipcar} alt="logoCast" />
        <p>O Golden VIP CAR não é apenas um serviço de transporte, é o melhor aplicativo de mobilidade. Oferecemos suporte 100% eficiente com uma equipe sempre preparada e as menores taxas do mercado para o motorista e o passageiro.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
         <img src={goldenvipcar} alt="logoCast" />
        <p>A golden Moto shopping é uma venda programada, onde você aporta todo mês um valor mensal, e participa todo mês de sorteios de bens pela loteria federal, ao final do período você recebe o bem escolhido mais uma rentabilidade gerada ao decorrer dos aportes e sendo sorteado ao decorrer do período você tem seu bem quitado pelo valor já pago.</p>
        </div>
        <div className="item" style={{ width: 20 }}>
         <img src={academy} alt="logoCast" />
        <p>O grupo Golden Path oferece 4 cursos voltados para o mercado: B3, Forex, Opções binárias e Criptomoedas. Nestes cursos os alunos aprenderão mais sobre como funcionam os mercados, como investir com mais clareza e segurança e todos os passos necessários para operar seu próprio dinheiro sem medo.</p>
        </div>
        </Slider>
    )
}

export { Projects }






