import React, { useEffect, useRef } from "react";
import Todo from "./Todo";
import "./Style/TodoList.css";
import { useSelector } from "react-redux";
function TodoList() {
  let todos = useSelector((state) => state.todos);
  const handleClickBell = (e) => {
    e.target.classList.add("ring");
    console.log(e.target.classList);
    setTimeout(() => {
      e.target.classList.remove("ring");
      console.log(e.target.classList);
    }, 800);
  };
  const reserveTodos = todos.slice(0).reverse();
  return (
    <div className="todo-list-container">
      {todos.length > 0 ? (
        <ul>
          {todos
            .slice(0)
            .reverse()
            .map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
      ) : (
        <div className="todo-list-empty-container">
          <h1 className="bell-icon" onClick={handleClickBell}>
            🛎️
          </h1>
          <h1>Todo list is empty</h1>
          <h2>Let's do something right now!!!</h2>
        </div>
      )}
    </div>
  );
}

export default TodoList;
