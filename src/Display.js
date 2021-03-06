import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Display = (props) => {
  const { gifGallery, handleClick, num, setNum, home} = props;
  return (
    // This section shows the results of selected mood, total is 50 pictures.
    // We let user choose from each five, there are two buttons to go next and previous.
    // Also there is another button show up to let user change their input.
    <section className="searchResults">
      <div className="wrapper">
        <h2>Search results:</h2>
        <div className="sectionContainer">
          {/* left button */}
          {num <= 4 ? null : (
            <button
              className="scroll resultsButton"
              onClick={() => {
                setNum(num - 5);
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}
          <div className="resultsContainer">
            {gifGallery.slice(num, num + 5).map((gifPic) => {
              return (
                <div className="imgContainer" key={gifPic.id}>
                  <img
                    className="resultsGif"
                    onClick={() => {
                      return handleClick(
                        gifPic.images.original.url,
                        gifPic.title,
                        gifPic.id
                      );
                    }}
                    src={gifPic.images.original.url}
                    alt={gifPic.title}
                  />
                </div>
              );
            })}
          </div>
          {/* right button */}
          {num >= gifGallery.length - 5 ? null : (
            <button
              className="scroll resultsButton"
              onClick={() => {
                setNum(num + 5);
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </div>
      </div>

      <h3>
        Don't like what you see?{" "}
        <span className="link" onClick={() => home.current.scrollIntoView()}>
          Try another search term
        </span>{" "}
        above!
      </h3>
    </section>
  );
};

export default Display;
