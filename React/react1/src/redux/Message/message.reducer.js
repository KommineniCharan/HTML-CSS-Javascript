import { GM, GE } from "./message.action";

let intialState = { message: "Hello" };

let messageReducer = (state = intialState, action) => {
  switch (action.type) {
    case GM:
      return { message: "Good Morning" };

    case GE:
      return { message: "Good Evening" };

    default:
      return state;
  }
};
export default messageReducer;
