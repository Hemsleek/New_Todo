import React from "react";

function Todos({ todos, setTodos }) {
  const handleCheck = (e, title) => {
    console.log(e.target.checked);
    const checkValue = e.target.checked;
    const updatedTodos = todos.map((todo) => {
      if (todo.title === title) {
        return {
          ...todo,
          isChecked: checkValue,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <form className="Todos">
      {todos.map((todo, todoIndex) => (
        <div
          key={todoIndex}
          className={`form-group ${
            todos.length - 1 === todoIndex ? "" : "border"
          }`}
        >
          <input
            checked={todo.isChecked}
            onChange={(e) => handleCheck(e, todo.title)}
            type="checkbox"
          />
          <label htmlFor="">{todo.title}</label>
        </div>
      ))}
    </form>
  );
}

export default Todos;
