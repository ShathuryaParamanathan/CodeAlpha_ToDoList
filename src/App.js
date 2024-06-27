import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" Component={HomePage} />
      </Routes>
    </div>
  );
}

export default App;