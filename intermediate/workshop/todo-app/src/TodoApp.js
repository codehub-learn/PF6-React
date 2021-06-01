import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

const TodoApp = ({ initialTodos }) => {
  const [toDoInput, setToDoInput] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  const updateInput = (e) => {
    setToDoInput(e.target.value);
  };

  const addToDo = (e) => {
    e.preventDefault();
    const newTodo = {
      title: toDoInput,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setToDoInput("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;

    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    console.log("delete todo", index);
  };

  return (
    <div>
      <h2>My ToDos</h2>
      <form onSubmit={addToDo}>
        Add ToDo: <input type="text" value={toDoInput} onChange={updateInput} />
        <button type="submit">Add ToDo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.title}
            {...todo}
            index={index}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
