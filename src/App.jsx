import React, { useState, useContext, createContext } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const LangContext = createContext();

function App() {
  const [lang, setLang] = useState("en");
  const [todos, setTodos] = useState([
    {
      id: 1730787481212,
      text: "kerjakan praktek react",
      completed: false,
    },
  ]);

  const handleAddTodo = (e, todo) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  

  return (
    <div className="container mt-5">
      <nav className="navbar bg-primary">
        <button 
          className="btn btn-secondary ms-auto mx-1" 
          type="button"
          onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
        >{lang === 'id' ? 'ID' : 'EN'}
        </button>
      </nav>
      <h1 className="text-center mb-4">{lang === 'id' ? 'Daftar Todo' : 'Todo List'}</h1>
      <LangContext.Provider value={lang}>
        <TodoForm handleAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </LangContext.Provider>
    </div>
  );
}

export default App;
