import React, { useState, useEffect, useRef } from "react";
import "./Style/Todo.css";
import * as actions from "../Redux/Actions";
import { useDispatch } from "react-redux";

function Todo(props) {
  const todoEl = useRef(null);
  const [value, setValue] = useState(props.todo.title);
  useEffect(() => {
    setValue(props.todo.title);
  }, [props.todo.title]);
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    todoEl.current.classList.add("remove");
    setTimeout(() => {
      dispatch(actions.deleteTodo(props.todo.id));
    }, 400);
  };
  const handleCheckTodo = () => {
    dispatch(actions.checkTodo(props.todo.id));
  };
  const handleEditTodo = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleUpdateTodo = () => {
    if (value !== props.todo.title) {
      dispatch(
        actions.updateTodo({
          ...props.todo,
          title: value,
        })
      );
    }
  };
  const handleUpdateTodoByEnter = (e) => {
    // console.log(e);
    if (e.key === "Enter") {
      if (value !== props.todo.title) {
        dispatch(
          actions.updateTodo({
            ...props.todo,
            title: value,
          })
        );
      }
    }
  };
  return (
    <div className="todo-container" ref={todoEl}>
      <input
        className="checkbox"
        type="checkbox"
        checked={props.todo.isDone}
        onClick={handleCheckTodo}
      />
      {/* <p className="labelTodo">{props.todo.id}</p> */}
      {/* <label htmlFor={props.todo.title} className="labelTodo">
        {props.todo.id}
      </label> */}
      <input
        className="text"
        type="text"
        value={value}
        onChange={handleEditTodo}
        onBlur={handleUpdateTodo}
        onKeyUp={handleUpdateTodoByEnter}
      />
      <button onClick={handleDeleteTodo}>🗑️</button>
    </div>
  );
}

export default Todo;
