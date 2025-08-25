import "@picocss/pico";
import "../styles/Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({name, url, description, imageUrl}) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit-creator", {state : {name, url, description, imageUrl}});
  }

  const handleDelete = () => {
    console.log(`Delete from id: ${name}`);
  }

  return (
    <article>
      <img src={imageUrl} />
      <hr />
      <div className="card-description">
        <div className="head-description">
          <h5>{name}</h5>
          <div className="custom-buttons">
            <button onClick={handleEdit} className="contrast">&#x270E;</button>
            <button onClick={handleDelete} className="secondary">&#x1F5D1;</button>
          </div>
        </div>
        <p>{description}</p>
        <a href={url}>{url}</a>
      </div>
    </article>
  );
};

export default Card;
