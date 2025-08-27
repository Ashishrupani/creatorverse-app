import "@picocss/pico";
import "../styles/Card.css";
import { useNavigate } from "react-router-dom";
import { FcInfo } from "react-icons/fc";
import { supabase } from "../client";

const Card = ({ id, name, url, description, imageUrl }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit-creator", {
      state: { id, name, url, description, imageUrl },
    });
  };

  const handleView = () => {
    navigate("/view-creator", {
      state: { id, name, url, description, imageUrl },
    });
  };

  const handleDelete = async () => {
    const {data, error} = await supabase.from('creators').delete().eq('id', id).select();

    if(error){
      console.log('There was an error deleting data');
    }
    else{
      console.log("Deleted..");
      console.log(data);
    }
  };

  return (
    <>
      <div className="card">
        <img src={imageUrl} alt="preview img" />
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="title-buttons">
              <button onClick={handleEdit} className="secondary">&#x270E;</button>
              <button onClick={handleDelete} className="secondary">&#x1F5D1;</button>
            </div>
          </h2>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <a href={url}>Channel link.</a>
          </p>
        </div>
        <div className="card-button">
          <button onClick={handleView} className="secondary">
            <FcInfo />
          </button>
        </div>
      </div>
    </>
    // <article>
    //   <img src={imageUrl} className="card-image"/>
    //   <hr />
    //   <div className="card-description">
    //     <div className="head-description">
    //       <h5>{name}</h5>
    //       <div className="custom-buttons">
    //         <button onClick={handleView} className="contrast info">i</button>
    //         <button onClick={handleEdit} className="contrast">&#x270E;</button>
    //         <button onClick={handleDelete} className="secondary">&#x1F5D1;</button>
    //       </div>
    //     </div>
    //     <p>{description}</p>
    //     <a href={url} >{url}</a>
    //   </div>
    // </article>
  );
};

export default Card;
