// import firebase from "./firebase";

const Display = (props) => {
  const { gifGallery, handleClick, home } = props;

  return (
    <section className="searchResults wrapper">
      <h2>Search results:</h2>
      <div className="resultsContainer">
        {gifGallery.map((gifPic) => {
          return (
            <div className="imgContainer">
              <img
                className="resultsGif"
                onClick={() => {
                  return handleClick(gifPic.images.original.url, gifPic.title, gifPic.id);
                }}
                key={gifPic.id}
                src={gifPic.images.original.url}
                alt={gifPic.title}
              />
            </div>
          );
        })}
      </div>
      <h3>
        Don't like what you see?{' '}
        <span className="link" onClick={() => home.current.scrollIntoView()}>
          Try another search term
        </span>{' '}
        above!
      </h3>
    </section>
  );
};

export default Display;
