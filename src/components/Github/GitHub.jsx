import React from 'react'
import './GitHub.css';

const GitHub = () => {
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

export default GitHub