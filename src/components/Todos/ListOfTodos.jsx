import React, { useState } from 'react'
import { removeTodo, setEditMode } from '../../slices/todoSlice';
import { useDispatch } from 'react-redux';

const ListOfTodos = ({items}) => {

  let [inputValue, setInputValue] = useState('');

    let dispatch = useDispatch();
    const handleRemove = (index) => {
        dispatch(removeTodo(index));
    };
    const handleEdit = (index) => {
        dispatch(setEditMode(index));
    };
  return (
    <div className="todo-list">
      <hr />
      <div className="top">
        <h3>List of Todos</h3>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder='Search with Todos...'/>
        
      </div>
      <hr />
      {items.length > 0 ? items.filter(item => item.toLowerCase().includes(inputValue.toLowerCase())).map((item, index) => (
        <div key={index} className="todo-item">
          <span>{item}</span>
          <div className="actions">
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleRemove(index)}>Delete</button>
          </div>
        </div>
      )) : <div style={{ color: 'red' ,textAlign: 'center'}} className="todo-item">No Todos</div>}
    </div>
  )
}

export default ListOfTodos