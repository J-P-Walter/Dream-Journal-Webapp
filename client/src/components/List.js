import React from "react";
import Record from "./Record";

export default function List() {
  const [records, setRecords] = React.useState([]);

  React.useEffect(() => {
    async function getRecords() {
      const response = await fetch("http://localhost:5000/record/");

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      setRecords(records);
    }
    getRecords();
    return;
  }, [records.length]);

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
