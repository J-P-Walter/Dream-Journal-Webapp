import React from "react";
import "./Entries.css";
import Dream from "./Dream";

export default function Entries(props) {
  const [sortedData, setSortedData] = React.useState([]);

  async function del(id) {
    await fetch(`http://localhost:3500/delete/${id}`, {
      method: "DELETE",
    });

    const newSorted = sortedData.filter((obj) => {
      return obj._id !== id;
    });
    setSortedData(newSorted);
  }
  React.useEffect(() => {
    setSortedData(props.data.sort((a, b) => (a.day > b.day ? 1 : -1)));
  }, [props.data]);
  //const sortedData = props.data.sort((a, b) => (a.day > b.day ? 1 : -1));
  const dreamList = sortedData.map((dream) => {
    return <Dream key={dream._id} {...dream} del={del} />;
  });

  return (
    <div className="view-entries">
      <div className="close" onClick={props.close}></div>
      <div className="data">
        {sortedData.length > 0 ? (
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
