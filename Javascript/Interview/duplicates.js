let sizes = [30, 34, 36, 30, 36, 40];

//Using For Loop
let for1 = [];
for (let i = 1; i <= sizes.length - 1; i = i + 1) {
  if (!for1.includes(sizes[i])) {
    for1.push(sizes[i]);
  }
}
console.log(sizes);
console.log(for1);

//Using Set
let set1 = [...new Set(sizes)];
console.log("Using Set");
console.log(set1);

//Using ForEach
let foreach1 = [];
sizes.forEach((element) => {
  if (!foreach1.includes(element)) {
    foreach1.push(element);
  }
});
console.log("Using ForEach");
console.log(foreach1);

//Filter
let filter1 = sizes.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log("Using Filter");
console.log(filter1);
