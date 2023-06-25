import React from "react";

export default function Meme() {
  const [meme, setmeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allmeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setmeme((prevmeme) => {
      return {
        ...prevmeme,
        [name]: value,
      };
    });
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allmeme.length);
    const url = allmeme[randomNumber].url;

    setmeme((prevmeme) => ({
      ...prevmeme,
      randomImage: url,
    }));
  }

  return (
    <div className="main">
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top-Text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />

        <input
          type="text"
          className="form-input"
          placeholder="Bottom-Text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />

        <button className="form-button" onClick={getMemeImage}>
          Get a New Meme Image 🖼️
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme-image" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
