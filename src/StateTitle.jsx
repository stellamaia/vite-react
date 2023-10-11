import { useState } from "react"
//IMPORTAR O STATE

function StateTitle({ cor }) {
    //passando prop para o component titulo 
    // abre chaves e o primeiro paramentro é chamado de text 
    //e o segundo paramentro é uma função que vai atualizar esse estado chamado de setText, 
    const [text, setText] = useState("Um titulo do estado inicial")
    //usando o useState que vai mostrar como nosso estado inicializa

    return (
        <div>
            <h1 style={{ color: cor }}>{text}</h1>
            <button onClick={() => {setText("Mudei via botão")}}>Mudar</button>

        </div>
    )
}
export default StateTitle