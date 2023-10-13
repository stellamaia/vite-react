
//a função sempre começa com o nome do arquivo, exemplo App
//dentro do nosso componente, temos um retornoimport { BrowserRouter, Routes, Route } from "react-router-dom"
import Title from "../Title"
import StateTitle from "../StateTitle"
import Menu from "./Menu"
function Sobre() {
    return (
        <div>
            <Menu />
            <h1>Sobreeee</h1>

            <Title cor="blue" nome="Maia" paragrafo={true} />
            {/* passando prop para o component Title */}

            <Title />
            <StateTitle />
            <StateTitle />


        </div>
    )
}
export default Sobre