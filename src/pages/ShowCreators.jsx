import "../styles/ShowCreators.css";
import "@picocss/pico";

const ShowCreators = ({name, imageUrl, description, Url}) => {
  return (
    <div className="wrapper">
      <div className="container-custom">
        <div className="left">
          <img
            src={imageUrl}
            alt="content creator's picture"
          />
        </div>
        <div className="right">
          <article>
            <header>{name}</header>
            <textarea name="read-only" readonly = 'true'>
              {description}
            </textarea>
            <footer>{Url}</footer>
          </article>
        </div>
      </div>

      <div className="article">
        <div class="grid">
          <button class="secondary">Edit</button>
          <button class="primary">Done</button>
        </div>
      </div>
    </div>
  );
};

export default ShowCreators;
