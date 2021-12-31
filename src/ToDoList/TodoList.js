import Form from './Form'
import Todos from './Todos'
import './list.css';
import React, {useState} from 'react'

const TodoList = () => {
    const [userInput, setUserInput] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <div className="container">
            <Form userInput={userInput} setUserInput={setUserInput} setTodos={setTodos} todos={todos}/>
            <Todos setTodos={setTodos} todos={todos}/>
        </div>
    )
}

export default TodoList

