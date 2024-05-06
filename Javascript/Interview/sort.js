let sizes = [36, 34, 40, 38, 30];

//Using ForLoop Ascending Order
function bsort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let result = bsort(sizes);
console.log(result);

//Using ForLoop Descending Order
function bdsort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let result2 = bdsort(sizes);
console.log(result2);

//Using Sort Ascending
let sort1 = sizes.sort();
console.log("Using Sort Ascending");
console.log(sort1);

//Using Sort Descending
let sort2 = sizes.sort((a, b) => b - a);
console.log("Using Sort Descending");
console.log(sort2);
