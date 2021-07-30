import { useState, useEffect } from "react";
import axios from "axios";

const Input = () => {
  const key = "Tmc6n4YWz2HNYzlcSDb5TkxMt3PCNbO3";
  const [userInput, setUserInput] = useState("");
  const [gifGallery, setGifGallery] = useState([]);
  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    let gallery = [];
    e.preventDefault();
    axios({
      url: "https://api.giphy.com/v1/gifs/search",
      method: "GET",
      dataResponse: "json",
      params: {
        api_key: key,
        q: userInput,
        limit: 5,
      },
    }).then((res) => {
    //   console.log(res.data);
      gallery = res.data.data;
      setGifGallery(gallery);

    });

    setUserInput("");
  };
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="search">Search here:</label>
        <input
          type="text"
          id="search"
          value={userInput}
          onChange={handleChange}
        />
      </form>
      {gifGallery.map((gifs) => {
        return <img key={gifs.id} src={gifs.images.original.url} alt={gifs.title} />;
      })}
    </div>
  );
};

export default Input;
