import firebase from "./firebase";

const Display = (props) => {
  const { gifGallery, userInput } = props;

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
    // dbRef.remove();
    // console.log(e.target);
  };
  return (
    <section>
      <h2>Photos</h2>
      <div className="photos">
        {gifGallery.map((gifPic) => {
          return (
            <img
              onClick={() => {
                return handleClick(
                  gifPic.images.original.url,
                  gifPic.title,
                  gifPic.id
                );
              }}
              key={gifPic.id}
              src={gifPic.images.original.url}
              alt={gifPic.title}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Display;
