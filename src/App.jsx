import { useState } from "react";
import "./App.css";
import "@picocss/pico";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import ShowCreators from "./pages/ShowCreators";
import EditCreator from "./pages/EditCreator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/show-creator" element={<ShowCreators/>}/>
        <Route path="/edit-creator" element={<EditCreator/>}/>
      </Routes>
    </>
  );
}

export default App;
