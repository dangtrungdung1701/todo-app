import React, { useEffect, useRef } from "react";
import Todo from "./Todo";
import "./Style/TodoList.css";
import { useSelector } from "react-redux";
function TodoList() {
  let todos = useSelector((state) => state);
  const el = useRef(null);
  useEffect(() => {
    el.current.scrollIntoView({ block: "end", behavior: "smooth" });
  });
  return (
    <div className="todo-list-container" ref={el}>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <div className="todo-list-empty-container">
          <h1 className="bell-icon">🛎️</h1>
          <h1>Todo list is empty</h1>
          <h2>Let's do something right now!!!</h2>
        </div>
      )}
    </div>
  );
}

export default TodoList;
