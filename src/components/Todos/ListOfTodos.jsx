import React from 'react'
import { removeTodo, setEditMode } from '../../slices/todoSlice';
import { useDispatch } from 'react-redux';

const ListOfTodos = ({items}) => {
    let dispatch = useDispatch();
    const handleRemove = (index) => {
        dispatch(removeTodo(index));
    };
    const handleEdit = (index) => {
        dispatch(setEditMode(index));
    };
  return (
    <div className="todo-list">
      {items.length > 0 ? items.map((item, index) => (
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