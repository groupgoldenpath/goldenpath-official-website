import "./signIn.css";
function SignIn() {
    return (
        <div className="SignIn">
            <form action="">
                <h4>Entrar</h4>
                <input type="text" placeholder="Usuário"/>
                <input type="password" placeholder="Senha"/>

                <button>Entrar</button>
                <a href="/">Ir para site oficial</a>
            </form>
        </div>
    )
}

export { SignIn }