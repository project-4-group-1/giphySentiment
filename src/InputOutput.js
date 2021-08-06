import { useState, useRef } from "react";
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

  const home = useRef(null);
  const results = useRef(null);
  const timeLine = useRef(null);

  const handleSubmit = (e) => {
    let gallery = [];
    e.preventDefault();
    // Guarantee that user only choose one word without any space.
    if (!/\s/.test(userInput)) {
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
          // If user input does not have any results from api, it alerts user to change input.
          if (gallery.length < 1) {
            alert("Invalid search, please try again.");
          } else {
            setGifGallery(gallery);
            setNum(0);
          }
        })
        .catch((err) => {
          return alert("The API failed to load!");
        });
      results.current.scrollIntoView();
    }
  };

  // Once user click on the certain image, it pass the data to firebase and display on timeline.
  const handleClick = (url, alt, id) => {
    const dbRef = firebase.database().ref();
    const imgObj = {
      url: url,
      alt: alt,
      id: id,
      emotion: userInput,
      date: Date().substr(0, 16),
    };
    dbRef.push(imgObj);
    timeLine.current.scrollIntoView();
  };

  return (
    <>
      <header ref={home}>
        <Header />
        <form
          action="#"
          onSubmit={handleSubmit}
          className="moodForm wrapper userForm"
        >
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
          <div
            className={
              /\s/.test(userInput) ? "errorWordCheck" : "errorWordHidden"
            }
          >
            <p>Please enter one word</p>
          </div>
        </form>
      </header>

      <main ref={results}>
        {/* Only runs when there is "something" to show. */}
        {gifGallery.length ? (
          <Display
            gifGallery={gifGallery}
            num={num}
            setNum={setNum}
            handleClick={handleClick}
            home={home}
            timeLine={timeLine}
          />
        ) : null}
        <div ref={timeLine}>
          <Timeline />
        </div>
      </main>
    </>
  );
};
export default InputOutput;
