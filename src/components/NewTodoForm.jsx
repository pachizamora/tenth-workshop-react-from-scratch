import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type In Your New To-Do Here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button">Create To-Do</button>
    </div>
  );
};

export default NewTodoForm;