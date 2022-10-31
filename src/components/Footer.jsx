import React from "react";

const Footer = ({ todos = [] }) => {
  const todosLeft = todos.filter((todo) => todo.isChecked === false);
  const tabs = "All,Active,Completed".split(",");
  return (
    <div className="Footer">
      <div className="actions">
        <img src="/vectors/add-icon.svg" alt="add-icon" />
        <img src="/vectors/search.svg" alt="search-icon" />
      </div>
      <div className="todo-info">
        <span>{todosLeft.length} items left</span>
        <div className="tabs">
          {tabs.map((tab) => (
            <span className="tab active" key={tab}>
              {tab}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
