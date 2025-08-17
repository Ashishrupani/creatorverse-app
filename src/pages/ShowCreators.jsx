import "../styles/ShowCreators.css";
import "@picocss/pico";

const ShowCreators = () => {
  return (
    <div className="wrapper">
        <div className="container-custom">
          <div className="left">this is left</div>
          <div className="right">this is right</div>
        </div>

        <div className="article">
          <div class="grid">
            <button class="secondary">Secondary</button>
            <button class="contrast">Contrast</button>
          </div>
        </div>
    </div>
  );
};

export default ShowCreators;
