import React from 'react'
import './Todo.css';
import ListOfTodos from './ListOfTodos';
import InputBox from './InputBox';
import BackButton from '../BackButton';
import { useSelector } from 'react-redux';

const Todo = () => {
    let {items} = useSelector((state) => state.todo);
    return (
        <div className="todo-container">
            <h2>Todo List</h2>
            <BackButton />
            <div className="todos">
                <InputBox />
                <ListOfTodos items={items} />
            </div>

        </div>
    )
}

export default Todo