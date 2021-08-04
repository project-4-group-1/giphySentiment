// import firebase from "./firebase";

const Display = (props) => {
  const { gifGallery, handleClick } = props;

  return (
    <section>
      <h2>Photos</h2>
      <div className="photos">
        {gifGallery.map((gifPic) => {
          return (
            <div className="displayImg">
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Display;
