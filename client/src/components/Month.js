import React from "react";
import "./Month.css";

export default function Month(props) {
  const [isFocus, setFocus] = React.useState(true);

  function handleClick() {
    setFocus(!isFocus);
  }

  return (
    <div
      className={isFocus ? "month-name" : "month-name test"}
      onClick={handleClick}
    >
      {props.month}
    </div>
  );
}
