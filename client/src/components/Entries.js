import React from "react";
import "./Entries.css";
import Dream from "./Dream";

export default function Entries(props) {
  const [dreams, setDreams] = React.useState(props.data);

  const dreamList = dreams.map((dream) => {
    return <Dream key={dream._id} {...dream} />;
  });

  return (
    <div className="view-entries">
      <div className="close" onClick={props.close}></div>
      <div className="data">
        {dreams.length > 0 ? (
          // <div className="dreams">{dreamList}</div>
          <p className="dreams"></p>
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
