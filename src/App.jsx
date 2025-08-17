import { useState } from "react";
import "./App.css";
import "@picocss/pico";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import ShowCreators from "./pages/ShowCreators";

function App() {
  return (
    <>
      <div className="container">
        <ShowCreators/>
      </div>
    </>
  );
}

export default App;
