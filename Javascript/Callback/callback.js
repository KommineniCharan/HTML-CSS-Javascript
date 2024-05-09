let sum = (a, b) => {
  return a + b;
};

let multi = (a, b) => {
  return a * b;
};

let sub = (a, b) => {
  return a - b;
};

let calculate = (a, b, x) => {
  return x(a, b);
};

let result = calculate(10, 20, sum);
console.log(result);

let result2 = calculate(10, 20, multi);
console.log(result2);

let result3 = calculate(10, 20, sub);
console.log(result3);
