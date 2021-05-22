import React, { useState, useEffect } from "react";
import "./Style/Todo.css";
import * as actions from "../Redux/Actions";
import { useDispatch } from "react-redux";

function Todo(props) {
  const [value, setValue] = useState(props.todo.title);
  useEffect(() => {
    setValue(props.todo.title);
  }, [props.todo.title]);
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch(actions.deleteTodo(props.todo.id));
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
    <div className="todo-container">
      <input
        className="checkbox"
        type="checkbox"
        checked={props.todo.isDone}
        onClick={handleCheckTodo}
      />
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
