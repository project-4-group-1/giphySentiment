import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Button = (props) => {
  const { target, direction } = props;

  const handleScroll = () => target.current.scrollIntoView();

  return (
    <div>
      <button className="scroll scrollUp" onClick={handleScroll}>
        {direction === 'up' ? (
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
      </button>
    </div>
  );
};

export default Button;
