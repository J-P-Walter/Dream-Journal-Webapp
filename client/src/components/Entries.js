import React from "react";
import "./Entries.css";
import Dream from "./Dream";
import { Link } from "react-router-dom";

export default function Entries(props) {
  const sortedData = props.data.sort((a, b) => (a.day > b.day ? 1 : -1));
  console.log(sortedData);
  const dreamList = sortedData.map((dream) => {
    return <Dream key={dream._id} {...dream} />;
  });

  return (
    <div className="view-entries">
      <div className="close" onClick={props.close}></div>
      <div className="data">
        {props.data.length > 0 ? (
          <div>
            <div className="dreams">{dreamList}</div>
          </div>
        ) : (
          <div className="no-dreams">
            <p>You have no dreams logged</p>
            <a href="http://localhost:3000/create" className="create">
              <button>Want to create one?</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
