import React from "react";

const Footer = () => {
  const tabs = "All,Active,Completed".split(",");
  return (
    <div className="Footer">
      <div className="actions">
        <img src="/vectors/add-icon.svg" alt="add-icon" />
        <img src="/vectors/search.svg" alt="search-icon" />
      </div>
      <div className="todo-info">
        <span>3 items left</span>
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
