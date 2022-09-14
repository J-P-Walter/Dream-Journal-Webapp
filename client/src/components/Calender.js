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

  const groupByMonth = records.reduce((group, month) => {
    const { month_number } = month;
    group[month_number] = group[month_number] ?? [];
    group[month_number].push(month);
    return group;
  }, {});

  //console.log(groupByMonth);

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
        //console.log(groupByMonth["0" + i]);
        entries = groupByMonth["0" + i];
      }
    } else {
      if (i in groupByMonth) {
        //console.log(groupByMonth[i.toString()]);
        entries = groupByMonth[i.toString()];
      }
    }
    Months.push(<Month month={months[i - 1]} data={entries} show={false} />);
  }

  return (
    <div>
      <h1 className="title">Dream Journal</h1>
      <main className="calender">
        <div className="months">{Months}</div>
      </main>
    </div>
  );
}
