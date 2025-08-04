import React, { use, useEffect, useRef } from 'react'
import "./Todo.css";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, setEditMode } from '../../slices/todoSlice';

const InputBox = () => {
    let inputRef = useRef(null);
    let { editMode, items } = useSelector((state) => state.todo);
    let dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = inputRef.current.value.trim();
        if (editMode !== null) {
            if (newTodo) {
                dispatch(editTodo(newTodo));
            }
        } else {
            if (newTodo) {
                dispatch(addTodo(newTodo));
            }
        }
        inputRef.current.value = '';
    };

    useEffect(() => {
        if (editMode !== null) {
            inputRef.current.value = items[editMode] || '';
            inputRef.current.focus();
        }
    }, [editMode]);
    return (
        <form onSubmit={handleSubmit} className="input-box">
            <input ref={inputRef} type="text" placeholder="Add a new task" />
            <button type='submit'>{editMode !== null ? 'Update' : 'Add'}</button>
        </form>
    )
}

export default InputBox