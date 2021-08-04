import { useState, useRef } from 'react';
import axios from 'axios';
import Display from './Display';
import Timeline from './Timeline';
import firebase from './firebase';
import Header from './Header';

const Input = () => {
  const key = 'Tmc6n4YWz2HNYzlcSDb5TkxMt3PCNbO3';
  const [userInput, setUserInput] = useState('');
  const [gifGallery, setGifGallery] = useState([]);
  const [page, SetPage] = useState(true);

  const home = useRef(null);
  const results = useRef(null);

  const handleSubmit = (e) => {
    let gallery = [];
    e.preventDefault();
    axios({
      url: 'https://api.giphy.com/v1/gifs/search',
      method: 'GET',
      dataResponse: 'json',
      params: {
        api_key: key,
        q: userInput,
        limit: 12,
      },
    })
      .then((res) => {
        gallery = res.data.data;
        if (page) {
          setGifGallery(gallery.slice(0, 6));
        } else {
          setGifGallery(gallery.slice(6));
        }
      })
      .catch((err) => {
        return alert('The API failed to load!');
      });

    results.current.scrollIntoView();
  };

  const handleClick = (url, alt, id) => {
    const dbRef = firebase.database().ref();
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
    const imgObj = {
      url: url,
      alt: alt,
      id: id,
      emotion: userInput,
      date: date,
    };
    dbRef.push(imgObj);
    setGifGallery([]);
  };

  return (
    <>
      <header ref={home}>
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

      <main ref={results}>
        {gifGallery.length ? (
          <Display
            gifGallery={gifGallery}
            userInput={userInput}
            handleClick={handleClick}
            home={home}
          />
        ) : null}

        <Timeline />
      </main>
    </>
  );
};

export default Input;
