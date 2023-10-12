import { useState } from "react"
//IMPORTAR O STATE

function StateTitle({ cor }) {
    //passando prop para o component titulo 
    // abre chaves e o primeiro paramentro é chamado de text 
    //e o segundo paramentro é uma função que vai atualizar esse estado chamado de setText, 
    const [text, setText] = useState("Um titulo do estado inicial")
    //usando o useState que vai mostrar como nosso estado inicializa


    const [inputText, setInputText] = useState("");

    function clicou() {
        setText(inputText);
    }
    return (
        <div>
            <h1 style={{ color: cor }}>{text}</h1>
            <input value={inputText} onChange={(e) => { setInputText(e.target.value) }} type="text" />
            {/* é atribuído a uma função de callback que é acionada toda vez que o valor do campo de entrada é alterado */}
            <button onClick={clicou}>Mudar</button>
            {/* a ação clicou vai ser chamada em uma function  */}
        </div>
    )
}
export default StateTitle