//a função sempre começa com o nome do arquivo, exemplo App
//dentro do nosso componente, temos um retorno
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Title from "./Title"
import StateTitle from "./StateTitle"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
function App() {
    return (
        <div>
            <Title cor="blue" nome="Maia" paragrafo={true} />
            {/* passando prop para o component Title */}

            <Title />
            <StateTitle />
            <StateTitle />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                    <Route path="/sobre" element={<Sobre />}>
                    </Route>
                    <Route path="/contato" element={<Contato />}>
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    )

}
export default App
//exporta ele para a main 