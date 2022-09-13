import React from "react";
import Month from "./Month";

export default function Calender() {
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
  console.log(records);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const Months = months.map((month) => <Month month={month} />);
  return (
    <div>
      <h1 className="title">Dream Journal</h1>
      <main className="calender">
        <div className="months">{Months}</div>
      </main>
    </div>
  );
}
