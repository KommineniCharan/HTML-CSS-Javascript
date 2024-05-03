let add = (a, b, c = 30) => {
  return a + b + c;
};
let result1 = add(20, 30);
let result2 = add(20, 30, 60);

console.log(result1);
console.log(result2);
