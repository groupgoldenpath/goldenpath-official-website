import './saudation.css'
import elevar from '../../assets/images/elevar.png'

function Saudation() {
    return (

        <div className="welcome">
            <div className="text">
                <h1>BEM-VINDO!</h1>
                <h3>O Caminho do seu sucesso começa aqui</h3>
                <p>Você se considera um investidor? Investidores são cidadões ou pessoas coletivas que aportam parte do seu dinheiro em determinado projeto/investimento com a intenção de adquirir rendimento.
Invista hoje com a Golden!</p>

<div className="buttons">
    <button>Entrar em contato</button>
    <button className="select">Mais sobre a Golden Path</button>
</div>
            </div>
            <div className="image">
                <img src={elevar} alt="" />
            </div>
        </div>
    )
}

export {Saudation}




