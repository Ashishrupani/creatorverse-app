import "@picocss/pico";
import "../styles/Card.css";

const Card = ({ name, url, description, imageUrl, id}) => {
  return (
    <article key={id}>
      <img src={imageUrl} />
      <hr />
      <div className="card-description">
        <div className="head-description">
          <h5>{name}</h5>
          <div className="custom-buttons">
            <button className="contrast">&#x270E;</button>
            <button className="secondary">&#x1F5D1;</button>
          </div>
        </div>
        <p>{description}</p>
        <a href={url}>{url}</a>
      </div>
    </article>
  );
};

export default Card;
