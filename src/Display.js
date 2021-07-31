// import firebase from "./firebase";

const Display = (props) => {
  const { gifGallery, userInput, handleClick } = props;

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
              // onClick={handleClick}
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
