import "./App.css";
import "@picocss/pico";
import { Routes, Route, data , useNavigate} from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import EditCreator from "./pages/EditCreator";
import AddCreator from "./pages/AddCreator.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/show-creators" element={<ShowCreators />} />
        <Route path="/view-creator" element={<ViewCreator />} />
        <Route path="/edit-creator" element={<EditCreator />} />
      </Routes>
    </>
  );
}

export default App;
