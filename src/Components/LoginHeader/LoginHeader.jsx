import DigitalStore from "../../assets/DigitalStore.png"
// import Search from "../../assets/Search.png"
import Buy from "../../assets/Buy.png"
import "./LoginHeader.css"

function LoginHeader() {

    return (
        <>
            <nav className="header">
                <img id="img1" src={DigitalStore} alt="" />
                    <input type="text" placeholder="Pesquisar produto..."></input>
                <a id="cadastro" href=""><u>Cadastre-se</u></a>
                <button>Entrar</button>
                <button><img src={Buy}/></button>
            </nav>

        </>
    )
}

export default LoginHeader