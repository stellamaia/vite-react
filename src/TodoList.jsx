import React, { useState } from "react";
import './TodoList.css';
import List from './assets/List.png';
function TodoList() {
    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem(form) {
        form.preventDefault();
        if (!novoItem) {
            return;
        }
        setLista([...lista, { text: novoItem, isCompleto: false }]);
        setNovoItem("");
        document.getElementById("input-entrada").focus()
    }
    function clicou(index) {
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux);
    }
    function deleta(index) {
        const listaAux = [...lista];
        listaAux.splice(index, 1);
        setLista(listaAux);//pegar a lista e alimentar a nova

    }
    function deleteAll() {
        setLista([]);
    }
    return (
        <div>
            <h1>Lista de Tarefa</h1>
            <form onSubmit={adicionaItem}>
                <input
                    id="input-entrada"
                    type="text"
                    value={novoItem}
                    onChange={(e) => setNovoItem(e.target.value)}
                    // controlar a entrada de dados em um elemento de formulário (como um campo de texto)
                    // e atualizar o estado do componente com o valor inserido pelo usuário.
                    placeholder="Adicione uma tarefa" />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="listaTarefas">
                <div style={{ textAlign: 'Center' }}>
                    {
                        lista.length < 1
                            ?
                            <img className="list" src={List} />
                            :
                            lista.map((item, index) => (
                                <div
                                    key={index}
                                    className={item.isCompleted ? "item completo" : "item"}>
                                    <span onClick={() => { clicou(index) }}>{item.text}</span>
                                    <button className="del" onClick={() => { deleta(index) }}>Deletar</button>

                                </div>
                            ))

                    }
                    <div className="content-deleteAll">
                        <button className="deleteAll" onClick={() => { deleteAll([]) }}>Deletar Todas</button>
                    </div>                </div>


            </div>
        </div>
    )
}
export default TodoList