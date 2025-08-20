import { useState } from "react";


const EditCreator = (props) => {

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [Url, setUrl] = useState("");

  const handleSubmit = (e)=> {
    e.preventDefault();
    
    console.log(name, imageUrl, description, Url);
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
                autocomplete="given-name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Image-Url
              <input
                type="url"
                name="Image-url"
                placeholder="Image Url"
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </label>
            <label>
              Description
              <input
                type="text"
                name="Description"
                placeholder="Content Creator's description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              Social Link / Url
              <input
                type="Url"
                name="Url"
                placeholder="links"
                onChange={(e) => setUrl(e.target.value)}
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
