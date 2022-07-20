import React, { useState } from "react";

const UseStateBasics = () => {
  const title = "Change my title";
  const [text, setText] = useState(title);
  const handleClick = () => {
    if (text === title) {
      setText("New Title");
    } else {
      setText(title);
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
