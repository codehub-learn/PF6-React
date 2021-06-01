import React from "react";

const TodoItem = ({ title, done, index, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleTodo(index)}
        />
        &nbsp;
        {done ? <strike>{title}</strike> : <span>{title}</span>}
        <button onClick={() => deleteTodo(index)}>delete</button>
      </label>
    </li>
  );
};

export default TodoItem;
