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
          key:propName,
          url: myData[propName].url,
          date: myData[propName].date,
          emotion: myData[propName].emotion,
          id: myData[propName].emotion,
          alt: myData[propName].alt,
        };
        newArray.push(moodObject);
        // console.log(moodObject);
      }
      setTimeLine(newArray);
    });
  },[]);

  const handleDelete=(moodToRemove)=>{
     const dbRef = firebase.database().ref();
     dbRef.child(moodToRemove).remove();
  }

  return (
    <ul>
      {timeLine.map((mood) => {
        // console.log(mood);
        return (
          // <li key={mood.key}>
          <li>
            <img src={mood.url} alt={mood.alt} />;<p>{mood.emotion}</p>
            <p>{mood.date}</p>
            <button onClick={()=>{handleDelete(mood.key)}}>🗑</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Timeline;
