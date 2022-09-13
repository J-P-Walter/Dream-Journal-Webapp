import React from "react";
import Record from "./Record";

export default function List() {
  const [records, setRecords] = React.useState([]);

  React.useEffect(() => {
    async function getRecords() {
      const response = await fetch("http://localhost:3500/record/");

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      //console.log(response);
      //const records = response.json;
      const records = await response.json();
      setRecords(records);
    }
    getRecords();
    return;
  }, [records.length]);
  //console.log(records);

  function recordList() {
    return records.map((record) => {
      return <Record record={record} key={record._id} />;
    });
  }

  return (
    <div>
      <h3>Dream List</h3>
      <p>{recordList()}</p>
    </div>
  );
}
