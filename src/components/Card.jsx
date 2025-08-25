import "@picocss/pico";
import "../styles/Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({id ,name, url, description, imageUrl}) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit-creator", {state : {id ,name, url, description, imageUrl}});
  }

  const handleView = () => {
    navigate("/view-creator", {state: {id, name, url, description, imageUrl}});
  }

  const handleDelete = () => {
    console.log(`Delete from id: ${name}`);
  }

  return (
    <article>
      <img src={imageUrl} className="card-image"/>
      <hr />
      <div className="card-description">
        <div className="head-description">
          <h5>{name}</h5>
          <div className="custom-buttons">
            <button onClick={handleView} className="contrast info">i</button>
            <button onClick={handleEdit} className="contrast">&#x270E;</button>
            <button onClick={handleDelete} className="secondary">&#x1F5D1;</button>
          </div>
        </div>
        <p>{description}</p>
        <a href={url} >{url}</a>
      </div>
    </article>
  );
};

export default Card;
