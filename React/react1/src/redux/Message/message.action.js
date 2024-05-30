//action type
const GM = "GM";
const GE = "GE";

//actions
let gmAction = () => {
  return { type: GM };
};

let geAction = () => {
  return { type: GE };
};

export { GM, GE, gmAction, geAction };
