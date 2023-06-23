import React from "react";
import MemesData from "./MemesData";

export default function Meme() {
  // const [memeImage,setMemeImage]=React.useState("")

  const [meme, setmeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allmemeImages, setAllMemeImages] = React.useState(MemesData);

  function getMemeImage() {
    const memesArray = allmemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setmeme(prevmeme=>({
      ...prevmeme,
      randomImage:url
    }));
  }

  return (
    <div className="main">
      <div className="form">
        <input type="text" className="form-input" placeholder="Top-Text" />
        <input type="text" className="form-input" placeholder="Bottom-Text" />
        <button className="form-button" onClick={getMemeImage}>
          Get a New Meme Image 🖼️
        </button>
      </div>

      <img src={meme.randomImage} alt="meme" className="meme-image" />
    </div>
  );
}
