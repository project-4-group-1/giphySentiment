import { useState } from "react";
import axios from "axios";
import Display from "./Display";
import Timeline from "./Timeline";
import firebase from "./firebase";
import Header from "./Header";

const InputOutput = () => {
  const key = "Tmc6n4YWz2HNYzlcSDb5TkxMt3PCNbO3";
  const [userInput, setUserInput] = useState("");
  const [gifGallery, setGifGallery] = useState([]);
  const [num, setNum] = useState(0);

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
        limit: 50,
      },
    })
      .then((res) => {
        gallery = res.data.data;
        setGifGallery(gallery);
        setNum(0);
      })
      .catch((err) => {
        return alert("The API failed to load!");
      });
  };

  const handleClick = (url, alt, id) => {
    const dbRef = firebase.database().ref();
    const imgObj = {
      url: url,
      alt: alt,
      id: id,
      emotion: userInput,
      date: Date(),
    };
    dbRef.push(imgObj);
    setGifGallery([]);
  };

  return (
    <>
      <header>
        <Header />

        <form action="#" onSubmit={handleSubmit} className="moodForm wrapper">
          <label htmlFor="search">How are you feeling today?</label>
          <input
            type="text"
            id="search"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            placeholder="Happy, excited, etc."
          />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Display gifGallery={gifGallery} handleClick={handleClick} num={num} setNum={setNum}/>
        <Timeline />
      </main>
    </>
  );
};

export default InputOutput;
