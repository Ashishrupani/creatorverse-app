import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../client.js";

const AddCreator = () => {

    const navigate = useNavigate();
  
    const [nameSt, setName] = useState("");
    const [imageUrlSt, setImageUrl] = useState("");
    const [descriptionSt, setDescription] = useState("");
    const [UrlSt, setUrl] = useState("");

  
    const handleSubmit = async (e)=> {
      e.preventDefault();
      const response = await supabase.from("creators").insert({name : nameSt, description : descriptionSt, url : UrlSt, imageURL : imageUrlSt});

      if (response.error){
        console.log("There was an error");
      }
      else{
        console.log("added creator");
      }
      console.log(nameSt, imageUrlSt, descriptionSt, UrlSt);
      navigate("/");
    }
  
    return (
      <>
        <h1>Add Creator</h1>
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
}

export default AddCreator