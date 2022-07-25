import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("peter");
  const [isError, setIsError] = useState(false);
  return (
    <>
      {/* if text is false it will render the "john doe" */}
      <h1>{text || "john doe"}</h1>
      {/* if text is true, then it will render peter and hello world */}
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
    </>
  );
};

export default ShortCircuit;
