import React, { useState } from "react";
import './TodoList.css';
function TodoList() {
    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem(form) {
        form.preventDefaul();
        if (!novoItem) {
            return;
        }
        setLista([...lista, { text: novoItem, isCompleto: false }]);
        setNovoItem("");
        document.getElementsById("input-entrada").focus()
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
                <div className="item ">
                    <span>Tarefa de exemplo</span>
                    <button className="del">Deletar</button>

                </div>
                <div className="item completo">
                    <span>Tarefa de exemplo</span>
                    <button className="del">Deletar</button>

                </div>
                <button className="deleteAll">Deletar Todas</button>
            </div>
        </div>
    )
}
export default TodoList