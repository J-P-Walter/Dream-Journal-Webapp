import React from "react";
import Month from "./Month";
import { nanoid } from "nanoid";
import "./Calender.css";

export default function Calender() {
  const [records, setRecords] = React.useState([]);

  React.useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        "https://jp-dream-journal.herokuapp.com:5000/record/"
      );

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

  const groupByMonth = records.reduce((group, month) => {
    const { month_number } = month;
    group[month_number] = group[month_number] ?? [];
    group[month_number].push(month);
    return group;
  }, {});
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
  const Months = [];
  for (let i = 1; i < months.length + 1; i++) {
    let entries = [];
    if (i < 10) {
      if ("0" + i in groupByMonth) {
        entries = groupByMonth["0" + i];
      }
    } else {
      if (i in groupByMonth) {
        entries = groupByMonth[i.toString()];
      }
    }
    Months.push(
      <Month month={months[i - 1]} data={entries} show={false} key={nanoid()} />
    );
  }

  return (
    <div>
      <div>
        <h1 className="title">Dream Journal</h1>
        <a href="http://localhost:3000/create" className="create-button">
          <button>Create New</button>
        </a>
      </div>
      <main className="calender">
        <div className="months">{Months}</div>
      </main>
    </div>
  );
}
