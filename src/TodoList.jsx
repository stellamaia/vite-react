import React, { useState, useEffect } from "react";
import './TodoList.css';
import List from './assets/List.png';
function TodoList() {
    const listStorage = localStorage.getItem('List');
    const [list, setList] = useState(listStorage ? JSON.parse(listStorage) : []);
    const [newItem, setNewItem] = useState("");

    useEffect(() => {
        localStorage.setItem('List', JSON.stringify(list));
    }, [list]);

    function addItem(event) {
        event.preventDefault();
        if (!newItem) {
            return;
        }
        setList([...list, { text: newItem, isCompleted: false }]);
        setNewItem("");
        document.getElementById("input-entry").focus();
    }

    function handleClick(index) {
        const updatedList = [...list];
        updatedList[index].isCompleted = !updatedList[index].isCompleted;
        setList(updatedList);
    }

    function deleteItem(index) {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
    }

    function deleteAllItems() {
        setList([]);
    }

    return (
        <div>
            <h1>Task List</h1>
            <form onSubmit={addItem}>
                <input
                    id="input-entry"
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add a task" />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="taskList">
                <div style={{ textAlign: 'center' }}>
                    {list.length < 1 ?
                        <img className="list" src={List} />
                        :
                        list.map((item, index) => (
                            <div
                                key={index}
                                className={item.isCompleted ? "item complete" : "item"}>
                                <span onClick={() => handleClick(index)}>{item.text}</span>
                                <button className="del" onClick={() => deleteItem(index)}>Delete</button>
                            </div>
                        ))
                    }
                    {list.length > 0 &&
                        <div className="content-deleteAll">
                            <button className="deleteAll" onClick={() => deleteAllItems([])}>Delete All</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default TodoList;
