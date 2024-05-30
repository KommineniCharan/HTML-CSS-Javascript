import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gmAction, geAction } from "./Message/message.action";

let Message = () => {
  let message = useSelector((state) => {
    return state.message;
  });

  let dispatch = useDispatch();

  let gmHandler = () => {
    dispatch(gmAction());
  };

  let geHandler = () => {
    dispatch(geAction());
  };

  return (
    <div>
      <h1>Message Component from Redux</h1>
      <h2>Message: {message.message}</h2>
      <button onClick={gmHandler}>GM</button>
      <button onClick={geHandler}>GE</button>
    </div>
  );
};

export default Message;
