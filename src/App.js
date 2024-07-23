import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AddTask from "./Components/AddTask";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/add" Component={AddTask} />
      </Routes>
    </div>
  );
}

export default App;