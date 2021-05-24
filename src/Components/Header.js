import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../Redux/Actions";
import { useSelector } from "react-redux";
import "./Style/Header.css";
import { BottomNavigation } from "@material-ui/core";

function Header() {
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state);
  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };
  const handleAddTodo = () => {
    if (todo) {
      dispatch(
        actions.addTodo({
          id: Date.now(),
          title: todo,
          isDone: false,
        })
      );
      setTodo("");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 800);
    }
  };
  const handleEnterAddTodo = (e) => {
    if (e.key === "Enter") {
      if (todo) {
        dispatch(
          actions.addTodo({
            id: Date.now(),
            title: todo,
            isDone: false,
          })
        );
        setTodo("");
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 800);
      }
    }
  };
  const dispatch = useDispatch();
  return (
    <div className="header-container">
      <h1>Todos</h1>
      <div className="input-container">
        <input
          type="text"
          onChange={handleOnChange}
          value={todo}
          placeholder="What do you wanna do ? my friend 🚀"
          onKeyUp={handleEnterAddTodo}
        />
        {error ? (
          <button className="error-button">⚠️</button>
        ) : (
          <button onClick={handleAddTodo} className="add-button">
            ➕
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
