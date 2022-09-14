import React from "react";
import "./Entries.css";

export default function Entries(props) {
  return (
    <div className="view-entries">
      <href className="close" onClick={props.close}></href>
      <p className="data">{props.data[0].month_name}</p>
    </div>
  );
}
