import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default user");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((user) => {
        // When getting the json, destructure the object for the user info
        const { login } = user;
        // Once user info has been received, set the new state to the name of the user
        setUser(login);
        // Remove the Loading... text once the state has changed
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>There is an error</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
