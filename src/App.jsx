import { useState } from "react";
import "./App.css";
import "@picocss/pico";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import ShowCreators from "./pages/ShowCreators";
import EditCreator from "./pages/EditCreator";

const HomePage = ({}) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "mark",
      url: "https://www.youtube.com/channel/UCY1kMZp36IQSyNx_9h4mpCg",
    },
    { id: "2", name: "john" },
  ]);

  const handleLoadCreators = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="head">
        <h1>Creatorverse</h1>
      </div>
      <div className="custom-buttons">
        <button>Add Creator</button>
        <button onClick={handleLoadCreators}>Load Creators</button>
      </div>

      <div className="container-custom">
        {cards ? (
          cards.map((card) => (
            <Card key={card.id} name={card.name} url={card.url} />
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/show-creator" element={<ShowCreators />} />
        <Route path="/edit-creator" element={<EditCreator />} />
      </Routes>
    </>
  );
}

export default App;
