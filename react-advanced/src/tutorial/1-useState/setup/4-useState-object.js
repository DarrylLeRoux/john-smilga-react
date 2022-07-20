import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(23);
  const [message, setMessage] = useState("Hi there");

  const changeMessage = () => {
    setName("Darryl");
    setAge(39);
    setMessage("Darryl is super cool");
  };

  const changeMessage2 = () => {
    setPerson({ name: "John", age: 39, message: "Hi there again" });
  };

  return (
    <>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>{message}</h4>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>

      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage2}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
