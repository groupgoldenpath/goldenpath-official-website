import { useParams } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Topbar } from "../../components/Topbar/Topbar";

import Conservador from "../../assets/images/conservador2.png"
import Moderado from "../../assets/images/moderado.png"
import Arrojado from "../../assets/images/arrojado.png"
import Trader from "../../assets/images/trader.png"
import "./resultQuiz.css"

function ResultQuiz() {
    const {result} = useParams();
    console.log(result)
    return (
        <div className="resultQuiz">
            <Topbar />
            <Navbar />
            <div className="section">
                <div className="text">
                    <h4>Seu perfil é:</h4>
                    <h1>{result}</h1>
                    <br />
                    {
                         result === "Conservador" ?  <h4>Prioriza a preservação do capital e tem baixa tolerância a perdas. Assume poucos riscos que possam comprometer seus investimentos. Suporta muito pouca oscilação nos investimentos.</h4> :
                         result === "Moderado" ?  <h4>Gosta da segurança nos investimentos, mas espera uma rentabilidade um pouco superior à taxa básica de juros. Suporta um pouco de oscilação nos investimentos.</h4> :
                         result === "Arrojado" ? <h4>Tem como objetivo a maior rentabilidade possível, para isso está disposto a assumir maiores riscos. Conhece os produtos de investimento e suporta as oscilações de mercado.</h4> :
                         result === "Trader" ? <h4>Prioriza a preservação do capital e tem baixa tolerância a perdas. Assume poucos riscos que possam comprometer seus investimentos. Suporta muito pouca oscilação nos investimentos.</h4> : ""
                    }           
                </div>
                <div className="image">
                    <img src={
                        result === "Conservador" ? Conservador :
                        result === "Moderado" ? Moderado :
                        result === "Arrojado" ? Arrojado :
                        result === "Trader" ? Trader : ""
                } alt="" />
                </div>
            
            </div>
            <div className="warning">
                <p></p>
            </div>
            <Footer />
        </div>
    )
}

export { ResultQuiz }