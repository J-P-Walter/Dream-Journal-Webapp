import "./Dream.css";

export default function Dream(props) {
  return (
    <div className="dream-list">
      <div className="dream">{props.month_name}</div>
      <div>{props.day}</div>
      <div>{props.sleep_quality}</div>
      <div>{props.sleep_duration}</div>
      <div>{props.dream}</div>
    </div>
  );
}
