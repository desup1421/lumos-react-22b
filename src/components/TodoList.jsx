import React, { useContext } from "react";
import { LangContext } from "../App";

function TodoList({ todos, handleDeleteTodo, handleCompleteTodo }) {
  const lang = useContext(LangContext);
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleCompleteTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            {lang === 'id' ? 'Hapus' : 'Delete'}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
