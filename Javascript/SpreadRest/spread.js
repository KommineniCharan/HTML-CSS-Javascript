let size = [30, 32, 34, 36];

let newSize = [];
for (x of size) {
  newSize.push(x);
}

console.log(newSize);

let newArr = [...size];
console.log(newArr);
