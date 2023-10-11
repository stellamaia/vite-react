function Title({ nome, paragrafo, cor }) {
    //passando prop para o component titulo 
    return (
        <div>
            <h1 style={{ color: cor }}> Oi eu sou tiago {nome ? nome : "vitorino"}</h1>
            {paragrafo
                ? <p>Loren Ipsum is simply dummy text</p>
                :<p>Nada</p>
            }
        </div>
    )
}
export default Title