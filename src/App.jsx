//a função sempre começa com o nome do arquivo, exemplo App
//dentro do nosso componente, temos um retorno

import Titulo from "./Titulo"
function App() {
    return (
        <div>
            <Titulo cor="blue" nome="Maia" paragrafo={true}/>
          {/* passando prop para o component titulo */}

            <Titulo/>
            <Titulo/>
            <Titulo/>
        </div>
    )
    
}
export default App
//exporta ele para a main 