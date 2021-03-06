import firebase from "firebase";
import { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const [timeLine, setTimeLine] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (snapshot) => {
      const myData = snapshot.val();
      const newArray = [];
      for (let propName in myData) {
        const moodObject = {
          key: propName,
          url: myData[propName].url,
          date: myData[propName].date,
          emotion: myData[propName].emotion,
          id: myData[propName].id,
          alt: myData[propName].alt,
        };
        newArray.unshift(moodObject);
      }
      setTimeLine(newArray);
    });
  }, []);

  const handleDelete = (moodToRemove) => {
    const dbRef = firebase.database().ref();
    dbRef.child(moodToRemove).remove();
  };

  // Timeline used react-vertical-timeline-component, it map through everything
  // we have on firebase and show the image information with a delete button.
  return (
    <div className="timeline" id="timeline">
      <h2>Timeline</h2>
      <VerticalTimeline>
        {timeLine.map((mood) => {
          return (
            <VerticalTimelineElement
              key={mood.key}
              date={mood.date.substr(0, 16)}
              dateClassName="date"
              iconClassName="icon"
              emotion={mood.emotion}
              tabIndex={0}
            >
              <img src={mood.url} alt={mood.alt} className="timelineImg" />
              <div className="moodDetails">
                <h3 className="vertical-timeline-element-title">
                  {mood.emotion}
                </h3>
                <button
                  onClick={() => {
                    handleDelete(mood.key);
                  }}
                >
                  Remove
                </button>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
