import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useffect");
    if (value >= 0) {
      document.title = `New Messages ${value}`;
    }
    // using an empty dependancy will only run the useEffect when it renders for the first time
    // using a dependancy (value of useState) will trigger the useEffect each time it is triggered
  }, []);

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
