import "./Dream.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function update() {}

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
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="2x"
          onClick={() => update(props._id)}
        />
        {"  "}
        <FontAwesomeIcon
          icon={faTrash}
          size="2x"
          onClick={() => props.del(props._id)}
        />
      </div>
    </div>
  );
}
