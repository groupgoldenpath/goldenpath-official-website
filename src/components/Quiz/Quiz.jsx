import './quiz.css'
import { useState } from "react"
import { toast } from 'react-toastify';

function Quiz() {

    const [stage, setStage] = useState(1);
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [question5, setQuestion5] = useState("");
    const [question6, setQuestion6] = useState("");
    const [question7, setQuestion7] = useState("");
    const [result, setResult] = useState("");

    function handleStage() {
        setStage(stage + 1)
    }
    function deleteStage() {
        setStage(stage - 1)
    }

    function handleQuestion1(data) {
        setQuestion1(data);
        console.log(data)
    }
    function handleQuestion2(data) {
        setQuestion2(data);
        console.log(data)
    }
    function handleQuestion3(data) {
        setQuestion3(data);
        console.log(data)
    }
    function handleQuestion4(data) {
        setQuestion4(data);
        console.log(data)
    }
    function handleQuestion5(data) {
        setQuestion5(data);
        console.log(data)
    }
    function handleQuestion6(data) {
        setQuestion6(data);
        console.log(data)
    }
    function handleQuestion7(data) {
        setQuestion7(data);
        console.log(data)
    }
    function handleResult(e) {
        e.preventDefault();
        
            if(question1 === "1" && question2 === "1" && question3 === "1") {
                window.open("/resultado/Conservador")
            } else if(question1 === "2" && question2 === "2" && question3 === "2") {
                window.open("/resultado/Moderado")
            }else if(question1 === "3" && question2 === "3" && question3 === "3") {
                window.open("/resultado/Arrojado")
            }else if(question1 === "4" && question2 === "4" && question3 === "4") {
                window.open("/resultado/Trader")
            }


        console.log(question1, question2, question3, question4, question5, question6, question7)
    }


    return (
        <div className="quiz">
            <div className="box">


            <h2>Responda nosso quiz e descubra por que a Golden Path ?? pra voc??</h2>
 
                <div className="indice">
                    <h3>1 de {stage}</h3>
                </div>
                <div className="bars">
                    <div className={stage === 1 || stage === 2 || stage === 3 || stage === 4 || stage === 5 || stage === 6 || stage === 7 ? "barLineSelected" : ""}></div>
                    <div className={stage === 2 || stage === 3 || stage === 4 || stage === 5 || stage === 6 || stage === 7 ? "barLineSelected" : "barLine"}></div>
                    <div className={stage === 3 || stage === 4 || stage === 5 || stage === 6 || stage === 7 ? "barLineSelected" : "barLine"}></div>
                    <div className={stage === 4 || stage === 5 || stage === 6 || stage === 7 ? "barLineSelected" : "barLine"}></div>
                    <div className={stage === 5 || stage === 6 || stage === 7 ? "barLineSelected" : "barLine"}></div>
                    <div className={stage === 6 || stage === 7 ? "barLineSelected" : "barLine"}></div>
                    <div className={stage === 7 ? "barLineSelected" : "barLine"}></div>

                </div>


                  

                <div className="bar">
                {stage === 1 ? 
                <div className="question">
                    <h3>QUEM ?? VOC?? NO MUNDO DOS INVESTIMENTOS?</h3>
                    <div className="reply">
                    <button className={ question1 === "1" ? "selected":""} onClick={() => {handleQuestion1("1")}} >Sou iniciante, estou dando meus primeiros passos nos investimentos.</button>
                    <button className={ question1 === "2" ? "selected":""} onClick={() => {handleQuestion1("2")}} >J?? sei me virar, mas ainda tenho muito a aprender sobre o assunto</button>
                    <button className={ question1 === "3" ? "selected":""} onClick={() => {handleQuestion1("3")}} >Tenho amplo conhecimento e uma carteira bem diversificada</button>
                    <button className={ question1 === "4" ? "selected":""} onClick={() => {handleQuestion1("4")}} >Sou trader e busco ganhar dinheiro com opera????es no curto prazo</button>
                    </div>
                    <button onClick={handleStage}>Pr??xima</button>
                </div>
                : stage === 2 ?
                <div className="question">
                    <h3>COMO VOC?? TOMA SUAS DECIS??ES AO INVESTIR ?</h3>
                     <div className="reply">
                    <button className={ question2 === "1" ? "selected":""} onClick={() => {handleQuestion2("1")}} >S?? invisto com a orienta????o de especialistas ou de quem eu confio</button>
                    <button className={ question2 === "2" ? "selected":""} onClick={() => {handleQuestion2("2")}} >Estou come??ando a tomar minhas decis??es, mas tenho certas d??vidas</button>
                    <button className={ question2 === "3" ? "selected":""} onClick={() => {handleQuestion2("3")}} >Costumo ler relat??rios, fazer cursos e gosto de acompanhar o mercado</button>
                    <button className={ question2 === "4" ? "selected":""} onClick={() => {handleQuestion2("4")}} >Insvisto com autonomia e dou conselhos para outras pessoas</button>
                    </div>
                    <button onClick={deleteStage}>voltar</button>
                    <button onClick={handleStage}>Pr??xima</button>
                </div>
                : stage === 3 ?
                <div className="question">
                    <h3>O QUE VOC?? PRIORIZA AO INVESTIR?</h3>
                     <div className="reply">
                    <button className={ question3 === "1" ? "selected":""} onClick={() => {handleQuestion3("1")}} >Busco primeiro seguran??a, n??o quero perder dinheiro</button>
                    <button className={ question3 === "2" ? "selected":""} onClick={() => {handleQuestion3("2")}} >Tolero pequenas oscila????es, mas nada que arrisque meu patrim??nio</button>
                    <button className={ question3 === "3" ? "selected":""} onClick={() => {handleQuestion3("3")}} >Aceito algumas perdas, em busca de ganhos maiores ao longo prazo</button>
                    <button className={ question3 === "4" ? "selected":""} onClick={() => {handleQuestion3("4")}} >Busco a maior rentabilidade no curto prazo, assumindo altos riscos</button>
                    </div>
                    <button onClick={deleteStage}>voltar</button>
                    <button onClick={handleStage}>Pr??xima</button>
                </div>
                : stage === 4 ?
                <div className="question">
                    <h3>VOC?? ACREDITA QUE PRECISARIA DE PARTE DO SEU INVESTIMENTO ANTECIPADAMENTE?</h3>
                     <div className="reply">
                    <button className={ question4=== "1" ? "selected":""} onClick={() => {handleQuestion4("1")}} >Sim, ?? importante ter boa parte do meu dinheiro a disposi????o, caso eu precise.</button>
                    <button className={ question4=== "2" ? "selected":""} onClick={() => {handleQuestion4("2")}} >N??o precisarei desse dinheiro t??o cedo. pode ficar um bom tempo aplicado.</button>
                    <button className={ question4=== "3" ? "selected":""} onClick={() => {handleQuestion4("3")}} >Tenho planos para esse dinheiro dentro de 1 ano, ent??o s?? poderia aplicar ele por esse tempo.</button>
                    </div>
                    <button onClick={deleteStage}>voltar</button>
                    <button onClick={handleStage}>Pr??xima</button>
                </div>
                : stage === 5 ?
                <div className="question">
                    <h3>O QUE VEM NA SUA CABE??A QUANDO VOC?? PENSA EM UM INVESTIMENTO "ARRISCADO"?</h3>
                     <div className="reply">
                    <button className={ question5 === "1" ? "selected":""} onClick={() => {handleQuestion5("1")}} >Excelente, oportunidade de grande valoriza????o!</button>
                    <button className={ question5 === "2" ? "selected":""} onClick={() => {handleQuestion5("2")}} >Arriscar perder meu dinheiro? prefiro algo certeiro.</button>
                    <button className={ question5 === "3" ? "selected":""} onClick={() => {handleQuestion5("3")}} >Uma pitadinha de risco em parte do meu dinheiro n??o faria mal...</button>
                    </div>
                    <button onClick={deleteStage}>voltar</button>
                    <button onClick={handleStage}>Pr??xima</button>
                </div>
                : stage === 6 ?
                <div className="question">
                    <h3>VOC?? J?? INVESTIU ( OU INVESTIRIA) EM ALGUM DESSES TIPOS DE INVESTIMENTO?</h3>
                     <div className="reply">
                    <button className={ question6 === "1" ? "selected":""} onClick={() => {handleQuestion6("1")}} >Poupan??a, tesouro Direto</button>
                    <button className={ question6 === "2" ? "selected":""} onClick={() => {handleQuestion6("2")}} >LCI, LCA E CDB</button>
                    <button className={ question6 === "3" ? "selected":""} onClick={() => {handleQuestion6("3")}} >A????es, fundos multimercado e Exchanges</button>
                    </div>
                    <button onClick={deleteStage}>voltar</button>
                    <button onClick={handleStage}>Pr??xima</button>
                </div>
                : stage === 7 ?
                <div className="question">
                    <h3>QUAL VALOR VOC?? J?? INVESTE (OU PRETENDE INVESTIR)?</h3>
                     <div className="reply">
                    <button className={ question7 === "1" ? "selected":""} onClick={() => {handleQuestion7("1")}} >At?? R$500,00</button>
                    <button className={ question7 === "2" ? "selected":""} onClick={() => {handleQuestion7("2")}} >Mais de R$2.500,00</button>
                    <button className={ question7 === "3" ? "selected":""} onClick={() => {handleQuestion7("3")}} >Mais de R$10.000,00</button>
                    </div>
                    <button onClick={deleteStage}>voltar</button>
                    <button onClick={handleResult}>Ver resultado</button>
                </div>
                
                : ""
}

            </div>
            </div>
        </div>
    )
}

export {Quiz}