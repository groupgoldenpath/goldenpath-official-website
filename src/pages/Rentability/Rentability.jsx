import "./rentability.css"

function Rentability() {
    return (
        <div className="rentability">
            <h1>Rentabilidade</h1>
            <div className="text">
              <p>Rentabilidade é um conceito da economia que indica o grau de sucesso de determinado investimento econômico, calculado a partir do percentual de remuneração do capiral investido na atividade.<br />
Conheça algumas opções de aportes para rentabilizar.</p>
                </div>

                <div className="aport">
                    <div className="values">
                        <div className="itens">
                            <button>R$ 2.500,00</button>
                        </div>
                        <div className="itens">
                             <button>R$ 5.000,00</button>
                        </div>
                        <div className="itens">
                            <button>R$ 10.000,00</button>
                        </div>
                        <div className="itens">
                            <button>R$ 20.000,00</button>
                        </div>
                        <div className="itens">
                            <button>R$ 50.000,00</button>
                        </div>
                        <div className="itens">
                            <button>R$ 100.000,00</button>
                        </div>
                    </div>
                    <div className="result">
                        <div className="resultValue">
                            <div className="valueDay">
                                <h3>{valueDay}</h3>
                            </div>
                            <div className="valueMonth">
                            <h3>{valueMonth}</h3>
                            </div>
                        </div>
                            <div className="resultTotal">
                                    <h1>{resultTotal}</h1>
                            </div>
                            <div className="text">
                                <p>O cálculo apresentado é sobre o valor estimado como lucro mensal, podendo sofrer alteração mensalmente, Rentabilidade passada não
representa garantia de rentabilidade futura, de acordo com a INSTRUÇÃO CVM Nº 555 e o Ofício-Circular n° 2/2019/CVM/SIN.</p>
                            </div>
                    </div>
                </div>
        </div>
    )
}