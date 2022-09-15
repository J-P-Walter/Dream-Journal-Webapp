import "./Dream.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Dream(props) {
  return (
    <div className="dream-list">
      <div className="date">
        <div>{props.month_name}</div>
        <div>{props.day}</div>
      </div>
      <div className="sleep-stuff">
        <div>Sleep quality: {props.sleep_quality}/4</div>
        <div>Sleep duration: {props.sleep_length}</div>
      </div>
      <div className="dream">{props.dream}</div>
      <div className="buttons">
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
    </div>
  );
}
