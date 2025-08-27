import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ViewCreator.css";
import "@picocss/pico";

const ViewCreator = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const {name, imageUrl, description, url} = location.state;
  

  const handleEdit = ()=> {
    navigate("/edit-creator", {state : {name, url, description, imageUrl}});
  }

  const handleReturn = ()=> {
    navigate("/show-creators");
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="container-custom">
          <div className="left">
            <img src={imageUrl} alt="content creator's picture" />
          </div>
          <div className="right">
            <article>
              <header>{name}</header>
              <label>
                {" "}
                Description
                <textarea name="read-only" readOnly={true} value={description}>
                </textarea>
              </label>
              <footer>
                <a href={url}>{url}</a>
              </footer>
            </article>
          </div>
        </div>

        <div className="article">
          <div className="grid">
            <button className="secondary" onClick={handleEdit}>Edit</button>
            <button className="primary" onClick={handleReturn}>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCreator