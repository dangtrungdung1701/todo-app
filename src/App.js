import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
