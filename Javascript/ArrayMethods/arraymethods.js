var fruits = ["Banana", "Apple", "Orange", "Mango"];

console.log(fruits);
fruits.push("Kiwi");
console.log("After Push");
console.log(fruits);
fruits.pop();
console.log("After Pop");
console.log(fruits);
fruits.unshift("Pineapple");
console.log("After Unshift");
console.log(fruits);
fruits.shift();
console.log("After Shift");
console.log(fruits);

let index = fruits.indexOf("Apple");
console.log("Index Of Apple is : " + index);

console.log("Length of an Array is : " + fruits.length);

let slice = fruits.slice(1, 3);
console.log(slice);

let fruitcopy = fruits.slice();
console.log(fruitcopy);

let reverse = fruitcopy.reverse();
console.log(reverse);
