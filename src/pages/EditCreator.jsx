import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const EditCreator = (props) => {

  const location = useLocation();
  const navigate = useNavigate();

  const {name, imageUrl, description, url} = location.state;

  const [nameSt, setName] = useState(name);
  const [imageUrlSt, setImageUrl] = useState(imageUrl);
  const [descriptionSt, setDescription] = useState(description);
  const [UrlSt, setUrl] = useState(url);

  const handleSubmit = (e)=> {
    e.preventDefault();
    
    console.log(nameSt, imageUrlSt, descriptionSt, UrlSt);
    navigate("/");
  }

  return (
    <>
      <h1>Edit Creator</h1>
      <article>
        <form>
          <fieldset>
            <label>
              Content Creator's name
              <input
                name="Creator-name"
                placeholder="Content Creator's name"
                onChange={(e) => setName(e.target.value)}
                value={nameSt}
              />
            </label>
            <label>
              Image-Url
              <input
                type="url"
                name="Image-url"
                placeholder="Image Url"
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrlSt}
              />
            </label>
            <label>
              Description
              <input
                type="text"
                name="Description"
                placeholder="Content Creator's description"
                onChange={(e) => setDescription(e.target.value)}
                value={descriptionSt}
              />
            </label>
            <label>
              Social Link / Url
              <input
                type="Url"
                name="Url"
                placeholder="links"
                onChange={(e) => setUrl(e.target.value)}
                value={UrlSt}
              />
            </label>
          </fieldset>

          <input type="button" value="Submit" onClick={handleSubmit}/>
        </form>
      </article>
    </>
  );
};

export default EditCreator;
