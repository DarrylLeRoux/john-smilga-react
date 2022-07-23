import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    value === 0
      ? (document.title = document.title)
      : (document.title = `New Messages ${value}`);
  });

  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;
