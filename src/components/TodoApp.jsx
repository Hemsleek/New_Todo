import React, { useState } from "react";
import { Link } from "react-router-dom";
import { defaultTodos } from "../data";
import Footer from "./Footer";
import "./TodoApp.css";
import Todos from "./Todos";

const TodoApp = () => {
  const [todos, setTodos] = useState(defaultTodos);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.todoText.value;
    console.log(inputValue);
    const newTodo = {
      title: inputValue,
      isChecked: false,
    };
    setTodos((currentTodos) => currentTodos.concat(newTodo));
    e.target.todoText.value = "";
  };

  return (
    <>
      <div className="TodoApp">
        <span className="title">THINGS TO DO</span>
        <main>
          <form onSubmit={handleSubmit} className="form-add">
            <input type="text" placeholder="Add New" name="todoText" />
          </form>
          <Todos todos={todos} setTodos={setTodos} />
        </main>
        <Footer todos={todos} />
      </div>
      <span className="cancel-msg">Press 'Esc' to Cancel</span>
      <Link to="/products">Go to products</Link>
    </>
  );
};

export default TodoApp;
