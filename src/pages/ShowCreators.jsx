import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ShowCreators.css";
import "@picocss/pico";

const ShowCreators = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const {id, name, imageUrl, description, url} = location.state;
  

  const handleEdit = ()=> {
    navigate("/edit-creator", {state : {id, name, url, description, imageUrl}});
  }

  const handleReturn = ()=> {
    navigate("/");
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
                <textarea name="read-only" readonly="true">
                  {description}
                </textarea>
              </label>
              <footer>
                <a href={url}>{url}</a>
              </footer>
            </article>
          </div>
        </div>

        <div className="article">
          <div class="grid">
            <button class="secondary" onClick={handleEdit}>Edit</button>
            <button class="primary" onClick={handleReturn}>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCreators;
