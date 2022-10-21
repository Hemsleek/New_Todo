import React from "react";
import Footer from "./Footer";
import "./TodoApp.css";
import Todos from "./Todos";

const TodoApp = () => {
  return (
    <>
      <div className="TodoApp">
        <span className="title">THINGS TO DO</span>
        <main>
          <form className="form-add">
            <input type="text" placeholder="Add New" />
          </form>
          <Todos />
        </main>
        <Footer />
      </div>
      <span className="cancel-msg">Press 'Esc' to Cancel</span>
    </>
  );
};

export default TodoApp;
