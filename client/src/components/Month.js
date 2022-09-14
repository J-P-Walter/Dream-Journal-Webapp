import React from "react";
import "./Month.css";
import Entries from "./Entries";

export default function Month(props) {
  const [display, setDisplay] = React.useState(props.month);
  const [showDreams, setShowDreams] = React.useState(props.show);

  function handleMouseOver() {
    setDisplay(props.data.length);
  }
  function handleMouseOut() {
    setDisplay(props.month);
  }
  function handleClick() {
    setShowDreams(!showDreams);
  }
  console.log(showDreams);
  return (
    <div>
      <div
        className="month-name"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        {display}
      </div>
      {showDreams ? <Entries data={props.data} /> : null}
    </div>
  );
}
