import "./Dream.css";
import { FaTrash, FaPen } from "react-icons/fa";

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
        <a
          href={`http://localhost:3000/update/${props._id}`}
          className="create"
        >
          <FaPen size={25} onClick={() => update(props._id)} />
        </a>
        {"  "}
        <FaTrash size={25} onClick={() => props.del(props._id)} />
      </div>
    </div>
  );
}
