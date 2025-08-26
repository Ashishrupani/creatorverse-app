import { useEffect, useState } from "react";
import "./App.css";
import "@picocss/pico";
import { Routes, Route, data , useNavigate} from "react-router-dom";
import Card from "./components/Card";
import ShowCreators from "./pages/ShowCreators";
import EditCreator from "./pages/EditCreator";
import { supabase } from "./client.js";
import AddCreator from "./pages/AddCreator.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";

const HomePage = ({}) => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const fetchCreators = async () => {
    const {data, error} = await supabase.from("creators").select("id, name, description, url, imageURL").limit("5");

    if (error){
      //window.alert("error occured fetching data from database");
      setCards([]);
    }
    else{
      //window.alert("creators fetched successfully");
      setCards(data);
    }
  }
  

  const handleLoadCreators = async (e) => {
    fetchCreators();
  };

  const handleAddCreator = () => {
    navigate("/add-creator");
  }

  useEffect(()=> {
    fetchCreators();
  },[]);


  return (
    <>
      <div className="head">
        <h1>Creatorverse</h1>
      </div>
      <div className="custom-buttons">
        <button onClick={handleAddCreator}>Add Creator</button>
        <button onClick={handleLoadCreators}>Load Creators</button>
      </div>

      <div className="container-custom">
        {cards ? (
          cards.map((card) => (
            <Card key={card.id} id= {card.id} name={card.name} url={card.url} description={card.description} imageUrl={card.imageURL}/>
          ))
        ) : (
          <>
          <><Card description={"Loading....."}/></>
          </>
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
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/show-creators" element={<ShowCreators />} />
        <Route path="/view-creator" element={<ViewCreator />} />
        <Route path="/edit-creator" element={<EditCreator />} />
      </Routes>
    </>
  );
}

export default App;
