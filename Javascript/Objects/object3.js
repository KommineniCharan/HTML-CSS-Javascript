let names = [{ id: 102, name: "Google", city: ["Bangalore", "Hyderabad"] }];
for (name of names) {
  console.log(name.city[1]);
  console.log(name.city[0]);
  console.log(name.name);
}
