import "./App.css";
import Month from "./components/Month";

function App() {
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
    <body>
      <h1 className="title">Dream Journal</h1>
      <main className="calender">
        <div className="months">{Months}</div>
      </main>
    </body>
  );
}

export default App;
