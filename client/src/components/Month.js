import React from "react";
import "./Month.css";
import Entries from "./Entries";

export default function Month(props) {
  const [display, setDisplay] = React.useState(props.month);
  const [showDreams, setShowDreams] = React.useState(false);

  function handleMouseOver() {
    setDisplay(props.data.length);
  }
  function handleMouseOut() {
    setDisplay(props.month);
  }
  //set false on close
  function handleClick() {
    setShowDreams(true);
  }
  function handleClose() {
    setShowDreams(false);
  }
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
      {showDreams ? <Entries data={props.data} close={handleClose} /> : null}
    </div>
  );
}
