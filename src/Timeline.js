import firebase from "firebase";
import { useState, useEffect } from "react";

const Timeline = () => {
  const [timeLine, setTimeLine] = useState([]);
  const dbRef = firebase.database().ref();
  //   dbRef.remove();
  useEffect(() => {
    dbRef.on("value", (snapshot) => {
      const myData = snapshot.val();
      const newArray = [];
      for (let propName in myData) {
        const moodObject = {
          url: myData[propName].url,
          date: myData[propName].date,
          emotion: myData[propName].emotion,
          id: myData[propName].id,
          alt: myData[propName].alt,
        };
        newArray.push(moodObject);
        // console.log(moodObject);
      }
      setTimeLine(newArray);
    });
  }, []);

  return timeLine.map((mood) => {
    // console.log(mood);
    return (
      <div>
        <img src={mood.url} alt={mood.alt} />;<p>{mood.emotion}</p>
        <p>{mood.date}</p>
      </div>
    );
  });
};

export default Timeline;
