import React from "react";
import "./Month.css";

export default function Month(props) {
  const [isFocus, setFocus] = React.useState(true);
  const [display, setDisplay] = React.useState(props.month);

  //Changes class when clicked, maybe change all classes so they fade?
  function handleClick() {
    setFocus(!isFocus);
  }
  function handleMouseOver() {
    setDisplay(0);
  }
  function handleMouseOut() {
    setDisplay(props.month);
  }

  return (
    <div>
      <div
        className={isFocus ? "month-name" : "month-name focus"}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {display}
      </div>
    </div>
  );
}
