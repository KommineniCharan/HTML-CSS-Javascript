let user = { id: 101, name: "Mahesh", email: "mahesh@gmail.com" };
let address = { area: "Hebbal", city: "Bangalore", state: "Karnataka" };

let user_details = { ...user, ...address };

console.log(user_details);
