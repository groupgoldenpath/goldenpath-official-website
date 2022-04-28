import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Topbar } from "../../components/Topbar/Topbar";
import "./rentability.css"

function Rentability() {
    const [valueDay, setValueDay] = useState("16,66");
    const [valueMonth, setValueMonth] = useState("500,00");
    const [resultTotal, setRresultTotal] = useState("5.000,00");
    // const [valueDay, setValueDay] = useState("default");
    // const [valueMonth, setValueMonth] = useState("default");
    // const [resultTotal, setRresultTotal] = useState("default");

    
    function handleSetValue(value) {
        if(value === "2500") {
            setValueDay("16,66");
            setValueMonth("500,00");
            setRresultTotal("5.000,00");
        } else if(value === "5000") {
            setValueDay("33,33");
            setValueMonth("1.000,00");
            setRresultTotal("10.000,00");
        } else if(value === "10000") {
            setValueDay("66,66");
            setValueMonth("2.000,00");
            setRresultTotal("20.000,00");
        } else if(value === "20000") {
            setValueDay("133,33");
            setValueMonth("4.000,00");
            setRresultTotal("40.000,00");
        } else if(value === "50000") {
            setValueDay("333,33");
            setValueMonth("10.000,00");
            setRresultTotal("100.000,00");
        } else if(value === "100000") {
            setValueDay("666,66");
            setValueMonth("20.000,00");
            setRresultTotal("200.000,00");
        } else {
            setValueDay("default");
            setValueMonth("default");
            setRresultTotal("default");
        }
    }

    return (
        <div className="rentability">
         <Topbar />
        <Navbar />


            <div className="text">
            <h1>Rentabilidade</h1>
              <p>Rentabilidade é um conceito da economia que indica o grau de sucesso de determinado investimento econômico, calculado a partir do percentual de remuneração do capiral investido na atividade.<br />
Conheça algumas opções de aportes para rentabilizar.</p>
                </div>

                <div className="aport">
                    <div className="values">
                            <button className={valueDay === "16,66" ? "selected" : ""} onClick={() => handleSetValue("2500")}>R$ 2.500,00</button>
                             <button className={valueDay === "33,33" ? "selected" : ""} onClick={() => handleSetValue("5000")}>R$ 5.000,00</button>
                            <button className={valueDay === "66,66" ? "selected" : ""} onClick={() => handleSetValue("10000")}>R$ 10.000,00</button>
                            <button className={valueDay === "133,33" ? "selected" : ""} onClick={() => handleSetValue("20000")}>R$ 20.000,00</button>
                            <button className={valueDay === "333,33" ? "selected" : ""} onClick={() => handleSetValue("50000")}>R$ 50.000,00</button>
                            <button className={valueDay === "666,66" ? "selected" : ""} onClick={() => handleSetValue("100000")}>R$ 100.000,00</button>
                    </div>
                    {valueDay === "default" && valueMonth === "default" && resultTotal === "default" ?
                     <div className="result">
                         <div className="default">
                             <h1>Escolha um valor.</h1>
                             <p>Cada valor traz um resultado diferente, ideal para vários tipos de investidores</p>
                         </div>
                     </div>
                    :

                    <div className="result">
                        <div className="resultValue">
                            <div className="valueDay">
                                <h4>Valor Diário</h4>
                                <h1>R${valueDay}</h1>
                            </div>
                            <div className="valueMonth">
                            <h4>Valor Mensal</h4>
                            <h1>R$ {valueMonth}</h1>
                            </div>
                        </div>
                            <div className="resultTotal">
                            <h2>Valor final</h2>
                                    <h1>R$ {resultTotal}</h1>
                            </div>
                            <div className="textResult">
                                <p>O cálculo apresentado é sobre o valor estimado como lucro mensal, podendo sofrer alteração mensalmente, Rentabilidade passada não
representa garantia de rentabilidade futura, de acordo com a INSTRUÇÃO CVM Nº 555 e o Ofício-Circular n° 2/2019/CVM/SIN.</p>
                            </div>
                    </div>
                   }
                   
          </div>

          <Footer />
        </div>
    )
}


export { Rentability }