import "./preRegistration.css"

function PreRegistration() {
    return (
        <div className="preRegistration">
            <h2>Entre em contato com nossa equipe!</h2>
            <form action="">
                <div className="bloco">
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="E-mail"/>
                </div>
                <div className="bloco">
                <input type="text" placeholder="Whatsapp"/>
                <select name="" id="">
                    <option value="">Serviço</option>
                    <option value="Rentabilidade">Rentabilidade</option>
                    <option value="GPX">GPX</option>
                    <option value="Evolution">Evolution</option>
                    <option value="Robôs">Robôs</option>
                    <option value="Sessão Chinesa">Sessão Chinesa</option>
                    <option value="App Mobilidade">App Mobilidade</option>
                    <option value="Cursos">Cursos</option>
                    <option value="Quero conhecer mais serviços">Quero conhecer mais serviços</option>
                </select>
                </div>
                <button>Falar com nossa equipe</button>
            </form>

        </div>
    )
}

export { PreRegistration }