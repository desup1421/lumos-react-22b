import React, { useState, useEffect, useContext } from "react";
import { LangContext } from "../App";

function TodoForm({handleAddTodo}) {
  const lang = useContext(LangContext);
  const [todoText, setTodoText] = useState("");
  const [todo, setTodo] = useState({
    id: Date.now(),
    text: todoText,
    completed: false,
  });

  useEffect(() => {
    setTodo({
      id: Date.now(),
      text: todoText,
      completed: false,
    });
  }, [todoText]);

  return (
    <form onSubmit={(e) => {handleAddTodo(e, todo); setTodoText('')}} className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder={lang === 'id' ? 'Tambah todo...' : 'Add todo...'}
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button type="submit" className="btn btn-primary">
       {lang === 'id' ? 'Tambah' : 'Add'}
      </button>
    </form>
  );
}

export default TodoForm;
