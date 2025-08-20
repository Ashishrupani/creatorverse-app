import { useNavigate } from "react-router-dom";
import "../styles/ShowCreators.css";
import "@picocss/pico";

const ShowCreators = ({ name, imageUrl, description, Url }) => {

  const navigate = useNavigate();

  const handleEdit = (e)=> {
    navigate("/edit-creator");
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
                <a href={Url}>{Url}</a>
              </footer>
            </article>
          </div>
        </div>

        <div className="article">
          <div class="grid">
            <button class="secondary" onClick={handleEdit}>Edit</button>
            <button class="primary">Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCreators;
