import DigitalStore from "../../assets/DigitalStore.png"
// import Search from "../../assets/Search.png"
// import Buy from "../../assets/Buy.png"
import "./LoginHeader.css"

function LoginHeader() {

    return (
        <>
            <header className="header">
                <img id="img1" src={DigitalStore} alt="" />
                    <input type="text" placeholder="Pesquisar produto..."></input>
                <a id="cadastro" href=""><u>Cadastre-se</u></a>
                <a id="entrar" href="">Entrar</a>
                <a id="carrinho" href=""></a>
            </header>

        </>
    )
}

export default LoginHeader