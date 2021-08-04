import firebase from "firebase";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { faTrash } from "@fortawesome/free-solid-svg-icons";





const Timeline = () => {
  const [timeLine, setTimeLine] = useState([]);
    const [num, setNum] = useState(1);
  const dbRef = firebase.database().ref();
  //   dbRef.remove();
  useEffect(() => {
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
        newArray.push(moodObject);
        // console.log(moodObject);
      }
      setTimeLine(newArray);
    });
  }, []);

  const handleDelete = (moodToRemove) => {
    const dbRef = firebase.database().ref();
    dbRef.child(moodToRemove).remove();
  };

  return (
    <div className="timeline">
      <VerticalTimeline>
        {timeLine.map((mood) => {
          // console.log(timeLine);
          // console.log(mood);
          return (
            <VerticalTimelineElement
              key={mood.key}
              date={mood.date.substr(0, 16)}
              dateClassName="date"
              iconClassName="icon"
              emotion={mood.emotion}

//               <h3 className="vertical-timeline-element-title">
//                 {mood.emotion}
//               </h3>
//               <img src={mood.url} alt={mood.alt} className="timelineImg" />
//               <button
//                 onClick={() => {
//                   handleDelete(mood.key);
//                 }}
//               >
//                 <FontAwesomeIcon icon={faTrash} />
//               </button>

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
    // <ul className="timeline">
    //   {timeLine.map((mood) => {
    //     // console.log(mood);
    //     return (
    //       // <li key={mood.key}>
    //       <li tabIndex={1} key={mood.key}>
    //         <VerticalTimeline>
    //           <VerticalTimelineElement>
    //             <img src={mood.url} alt={mood.alt} className="timelineImg" />
    //             <div className="moodDetails">
    //               <h3 className="vertical-timeline-element-title">
    //                 {mood.emotion}
    //               </h3>
    //               <h3 className="vertical-timeline-element-title">
    //                 {mood.date}
    //               </h3>
    //               <button
    //                 tabIndex={1}
    //                 onClick={() => {
    //                   handleDelete(mood.key);
    //                 }}
    //               >
    //                 Remove
    //               </button>
    //             </div>
    //           </VerticalTimelineElement>
    //         </VerticalTimeline>
    //       </li>
    //     );
    //   })}
    // </ul>
  );
};

export default Timeline;
