//a função sempre começa com o nome do arquivo, exemplo App
//dentro do nosso componente, temos um retorno

import Title from "./Title"
import StateTitle from "./StateTitle"
function App() {
    return (
        <div>
            <Title cor="blue" nome="Maia" paragrafo={true} />
            {/* passando prop para o component Title */}

            <Title />
            <StateTitle />
            <StateTitle />
        </div>
    )

}
export default App
//exporta ele para a main 