import React, { useState } from "react";

let Hook = () => {
  let message = "Hello";

  let [variable, setVariable] = useState(message);

  let gmHandler = () => {
    setVariable("Good Morning");
  };

  let geHandler = () => {
    setVariable("Good Evening");
  };

  return (
    <div>
      <h1>Hook Function Component</h1>
      <h2>Message : {variable}</h2>
      <button onClick={gmHandler}>GM</button>
      <button onClick={geHandler}>GE</button>
    </div>
  );
};

export default Hook;
