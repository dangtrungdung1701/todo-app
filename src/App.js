import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header></Header>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
