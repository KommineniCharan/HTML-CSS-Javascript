var names = ["Biswal", "Sourabh", "Mahesh", "Jerin", "Raksha"];

for (var i = 0; i <= names.length - 1; i = i + 1) {
  console.log(names[i]);
}

console.log("ForOf Keyword");
for (name of names) {
  console.log(name);
}

console.log("ForEach Keyword");
