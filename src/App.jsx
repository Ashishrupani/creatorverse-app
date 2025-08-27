import "./App.css";
import "@picocss/pico";
import { Routes, Route, data, useNavigate } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";
import Footer from "./components/Footer.jsx";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoadCreators = () => {
    console.log("Welcome to CreatorVerse.");
    navigate("/show-creators");
  };

  return (
    <>
      <div className="background">
        <div className="head">
          <h1>Creatorverse</h1>
        </div>
        <div className="custom-buttons-app">
          <button onClick={handleLoadCreators}>Load Creators</button>
        </div>
        <Footer/>
      </div>
      </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/show-creators" element={<ShowCreators />} />
        <Route path="/view-creator" element={<ViewCreator />} />
        <Route path="/edit-creator" element={<EditCreator />} />
      </Routes>
    </>
  );
}

export default App;
