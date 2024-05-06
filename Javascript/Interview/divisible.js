//Divisible by Value
function seven(number) {
  return number % 7 === 0;
}
let result = seven(35);
console.log(result);

//Divisible using Array
let numbers = [35, 55, 65, 70, 80, 90];
function div(arr) {
  let divs = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 7 === 0) {
      divs.push(arr[i]);
    }
  }
  return divs;
}

let result2 = div(numbers);
console.log(result2);
