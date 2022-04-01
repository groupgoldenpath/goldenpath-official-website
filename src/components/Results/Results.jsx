import { findByLabelText } from '@testing-library/react'
import './results.css'

function Results() {
    return (
    <div className="results">
        <div className="item">
            <h3>Clientes</h3>
        </div>
        <div className="item">
        <h3>Cotas</h3>
        </div>
        <div className="item">
        <h3>Motos</h3>
        </div>
        <div className="item">
        <h3>iPhones</h3>
        </div>
    </div>
    )
}

export { Results }






