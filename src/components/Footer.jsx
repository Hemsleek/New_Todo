import React from "react";

const Footer = () => {
  const tabs = "All,Active,Completed".split(",");
  return (
    <div className="Footer">
      <div className="actions"></div>
      <div className="todo-info">
        <span>3 items left</span>
        <div className="tabs">
          {tabs.map((tab) => (
            <span key={tab}>{tab}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
