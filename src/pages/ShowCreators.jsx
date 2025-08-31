import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ShowCreators.css";
import "@picocss/pico";
import Card from "../components/Card";
import { supabase } from "../client.js";
import axios from 'axios';
import Footer from "../components/Footer.jsx";

const ShowCreators = ({}) => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const fetchCreators = async () => {
    const {data, error} = await supabase.from('creators').select("id, name, description, url, imageURL").limit(5);
    //const {data, error} = await axios.get('http://localhost:5000/show-creators');

    if (error){
      //window.alert("error occured fetching data from database");
      setCards([]);
    }
    else{
      //window.alert("creators fetched successfully");
      setCards(data);
    }
  }
  

  const handleLoadCreators = async () => {
    fetchCreators();
  };

  const handleAddCreator = () => {
    navigate("/add-creator");
  };
  
  const handleDeleteCreator = async (id) => {

    const response = await supabase.from('creators').delete().eq('id', id).select();

    if(response.error){
      console.log("There was an error deleting the record...");
    }
    else{
      const newCards = [...cards];
      const index = cards.findIndex((card) => card.id === id);
      newCards.splice(index, 1);
      setCards(newCards);
    }

  };

  useEffect(()=>{
    handleLoadCreators();
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

      <article>
      <div className="container-custom-cards">
        {cards ? (
          cards.map((card) => (
            <Card key={card.id} id= {card.id} name={card.name} url={card.url} description={card.description} imageUrl={card.imageURL} handleDeleteClick={handleDeleteCreator}/>
          ))
        ) : (
          <>
          <Card/>
          </>
        )}
      </div>
      <Footer />
      </article>
    </>
  );
};

export default ShowCreators;
